import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const useEditBlogPost = (slug) => {
    const [editPost, setEditPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            console.log(slug);
            if (slug) {
                try {
                    const res = await fetch(`/api/posts/post?slug=${slug}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    const data = await res.json();
                    setEditPost(data);
                } catch (error) {
                    toast.error('Errore nel caricamento del post');
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    return { editPost, loading };
};

export default useEditBlogPost;
