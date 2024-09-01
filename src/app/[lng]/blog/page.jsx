'use client';
import { storage } from '@/lib/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
        </div>
    );
};
export default Blog;
