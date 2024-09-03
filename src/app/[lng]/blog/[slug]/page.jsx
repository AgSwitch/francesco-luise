'use client';
import Loader from '@/components/loader/Loader';
import Post from '@/components/post/Post';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const PostPage = ({params}) => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const getPost = async (e) => {
        try {
            const res = await fetch(`/api/posts/post?slug=${params.slug}`, {
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

    useEffect(() => {
        getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(loading){
        return <Loader />
    }

    if (!post) {
        return <div>Loading...</div>;
    }
    return <Post post={post}/>;
};
export default PostPage;
