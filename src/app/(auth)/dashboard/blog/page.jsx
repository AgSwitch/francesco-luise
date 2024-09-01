'use client';

import BundledEditor from '@/components/editor/Editor';
import Post from '@/components/post/Post';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { storage } from '@/lib/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

const PageDashboardBlog = () => {
    const [form, setForm] = useState({
        slug: '',
        title: '',
        desc: '',
        imgUrl: '',
        paragraphs: [{ subtitle: '', paragraph: '' }],
    });
    const inputRef = useRef(null);

    const handleUpload = async (e) => {
        console.log(inputRef.current.files);
        const file = inputRef.current.files[0];

        if (file) {
            const fileRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(fileRef, file);
            const url = await getDownloadURL(snapshot.ref);
            setForm({ ...form, imgUrl: url.toString() });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/posts/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            console.log(form);
            if (res.ok) {
                toast.success('Post creato');
            } else {
                toast.error('Errore');
            }
        } catch (error) {
            toast.error('Errore');
        }
    };

    const handleTitleChange = (e) => {
        let slug = e.target.value.toLowerCase().replace(/\s/g, '-');
        setForm({ ...form, slug: slug , title: e.target.value });
    };

    const handleAddParagraph = () => {
        setForm((prevForm) => ({
            ...prevForm,
            paragraphs: [
                ...prevForm.paragraphs,
                { subtitle: '', paragraph: '' },
            ],
        }));
    };

    const handleRemoveParagraph = (index) => {
        setForm((prevForm) => ({
            ...prevForm,
            paragraphs: prevForm.paragraphs.filter((_, i) => i !== index),
        }));
    };

    const handleParagraphChange = (index, field, value) => {
        const newParagraphs = [...form.paragraphs];
        newParagraphs[index][field] = value;
        setForm({ ...form, paragraphs: newParagraphs });
    };

    return (
        <div>
            <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-col max-w-3xl gap-8"
            >
                <Input
                    onChange={handleTitleChange}
                    type="text"
                    placeholder="title"
                    name="title"
                    required
                />
                <Input
                    onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    type="text"
                    placeholder="desc"
                    name="desc"
                    required
                />
                <Input
                    ref={inputRef}
                    type="file"
                    name="image"
                    onChange={handleUpload}
                />
                {form.paragraphs.map((paragraph, index) => (
                    <Paragraph
                        key={index}
                        index={index}
                        subtitle={paragraph.subtitle}
                        paragraph={paragraph.paragraph}
                        handleParagraphChange={handleParagraphChange}
                        handleRemoveParagraph={handleRemoveParagraph}
                    />
                ))}
                <button type="button" onClick={handleAddParagraph}>
                    Aggiungi Paragrafo
                </button>
                <button type="submit">Invia</button>
            </form>
            <div>
                <Post post={form} />
            </div>
        </div>
    );
};

export default PageDashboardBlog;

const Paragraph = ({
    index,
    subtitle,
    paragraph,
    handleParagraphChange,
    handleRemoveParagraph,
}) => {
    const editorRef = useRef(null);
    const inputRef = useRef(null);
    const handleUpload = async (e) => {
        console.log(inputRef.current.files);
        const file = inputRef.current.files[0];

        if (file) {
            const fileRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(fileRef, file);
            const url = await getDownloadURL(snapshot.ref);
            handleParagraphChange(index, 'imgUrl', url.toString());
        }
    };
    return (
        <div className="flex flex-col gap-4 border-2">
            <Input
                onChange={(e) =>
                    handleParagraphChange(index, 'subtitle', e.target.value)
                }
                type="text"
                placeholder="subtitle"
                name="subtitle"
                value={subtitle}
                required
            />
            {/* <Textarea
                onChange={(e) =>
                    
                }
                placeholder="paragraph"
                name="paragraph"
                value={paragraph}
                required
            /> */}
            <BundledEditor
                onEditorChange={(content) =>
                    handleParagraphChange(index, 'paragraph', content)
                }
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
            />
            <Input
                ref={inputRef}
                type="file"
                name="image"
                onChange={handleUpload}
            />
            <button type="button" onClick={() => handleRemoveParagraph(index)}>
                Elimina
            </button>
        </div>
    );
};
