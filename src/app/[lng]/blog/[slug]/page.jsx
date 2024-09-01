'use client';
import Post from '@/components/post/Post';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const PostPage = ({params}) => {
    const [post, setPost] = useState({});
    const getPost = async (e) => {
        try {
            const res = await fetch('/api/posts/post', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                //body: JSON.stringify({slug: params.slug}),
            });
            const data = await res.json();
            // const { title, desc, imgUrl} = data._document.data.value.mapValue.fields;
            // const paragraphs = data._document.data.value.mapValue.fields.paragraphs.arrayValue.values
            setPost(data);
        } catch (error) {
            toast.error('Errore');
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    useEffect(() => {
        console.log(post);
    }, [post]);
    if (!post) {
        return <div>Loading...</div>;
    }
    return <Post post={post}/>;
};
export default PostPage;
