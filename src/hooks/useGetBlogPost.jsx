import { useState, useEffect } from 'react';

const useGetBlogPosts = (numberOfPosts) => {
  const [lastBlogPosts, setLastBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const limit = numberOfPosts || 10;

  const getBlogPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/posts?limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`Error fetching blog posts: ${res.statusText}`);
      }
      const data = await res.json();
      console.log(data);
      setLastBlogPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { lastBlogPosts, loading, error };
};

export default useGetBlogPosts;
