'use client';


import Loader from '@/components/loader/Loader';
import Post from '@/components/post/Post';
import useGetBlogPost from '@/hooks/useGetBlogPost';
import { useRouter } from 'next/navigation';

const BlogPost = ({params}) => {
    const { post, loading } = useGetBlogPost(params.slug);
    const router = useRouter();
    if (params.lng !== "it") router.replace(`/${params.lng}/`);
    if(loading){
        return <Loader />
    }

    if (!post) {
        return <Loader />;
    }
    return <Post post={post}/>;
};

export default BlogPost;
