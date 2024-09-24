import { useState } from "react";

const useDeleteBlogPost = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const deleteBlogPost = async (slug) => {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts/post?slug=${slug}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!res.ok) {
          throw new Error(`Error deleting blog post: ${res.statusText}`);
        }
    
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return { deleteBlogPost, loading, error };
  };
  
  export default useDeleteBlogPost;
  