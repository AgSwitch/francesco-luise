'use client';
import Loader from '@/components/loader/Loader';
import Post from '@/components/post/Post';
import useGetBlogPost from '@/hooks/useGetBlogPost';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const PostPage = ({params}) => {
    const { post, loading } = useGetBlogPost(params.slug);

    if(loading){
        return <Loader />
    }

    if (!post) {
        return <div>Loading...</div>;
    }
    return <Post post={post}/>;
};
export default PostPage;
