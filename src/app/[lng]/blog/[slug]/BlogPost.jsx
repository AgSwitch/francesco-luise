'use client';


import Loader from '@/components/loader/Loader';
import Post from '@/components/post/Post';
import useGetBlogPost from '@/hooks/useGetBlogPost';

const BlogPost = ({params}) => {
    const { post, loading } = useGetBlogPost(params.slug);

    if(loading){
        return <Loader />
    }

    if (!post) {
        return <Loader />;
    }
    return <Post post={post}/>;
};

export default BlogPost;
