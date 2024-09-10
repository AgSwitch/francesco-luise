import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const useGetBlogPost = (slug) => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/posts/post?slug=${slug}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                setPost(data);
                setLoading(false);
            } catch (error) {
                toast.error('Errore');
            }
        };

        fetchPost();
    }, [slug]);

    return { post, loading };
};

export default useGetBlogPost;
