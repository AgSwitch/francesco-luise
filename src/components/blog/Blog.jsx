'use client';

import Pill from '../pill/Pill';
import CustomLink from '../customLink/CustomLink';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

// to replace with API data
// const lastBlogPosts = [
//   {
//     title: "I benefici della fisioterapia sportiva",
//     description: "Scopri come la fisioterapia può aiutarti a migliorare le tue performance sportive e prevenire infortuni.",
//     image: "https://images.pexels.com/photos/27730430/pexels-photo-27730430/free-photo-of-fitness-salute-atleta-esercizio.jpeg?auto=compress&cs=tinysrgb&w=600",
//     date: "01/03/2023",
//     link: {
//       target: "_blank",
//       href: "https://example.com/fisioterapia-sportiva",
//     }
//   },
//   {
//     title: "Fisioterapia e dolore cronico: strategie di gestione",
//     description: "Una guida pratica per gestire il dolore cronico attraverso tecniche fisioterapiche efficaci.",
//     image: "https://images.pexels.com/photos/5473177/pexels-photo-5473177.jpeg?auto=compress&cs=tinysrgb&w=600",
//     date: "15/02/2023",
//     link: {
//       target: "_blank",
//       href: "https://example.com/dolore-cronico"
//     }
//   },
//   {
//     title: "Recupero post-operatorio: l'importanza della fisioterapia",
//     description: "Come la fisioterapia può accelerare il recupero e migliorare i risultati dopo un intervento chirurgico.",
//     image: "https://images.pexels.com/photos/5473179/pexels-photo-5473179.jpeg?auto=compress&cs=tinysrgb&w=600",
//     date: "28/01/2023",
//     link: {
//       target: "_blank",
//       href: "https://example.com/recupero-post-operatorio"
//     }
//   },
// ];

const Blog = ({ lng }) => {
  const [lastBlogPosts, setLastBlogPosts] = useState([]);
    const getLastBlogPosts = async () => {
        try {
            const res = await fetch('api/posts/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setLastBlogPosts(data);
        } catch (error) {
          throw new Error('Error fetching blog posts');
        }
    };

    useEffect(() => {
      getLastBlogPosts();
    }, []);

    const t = useTranslations('blog');
    return (
        <section
            id="blog"
            className=" min-h-screen bg-secondary py-20 flex flex-col items-center justify-center gap-10"
        >
            <h3 className="text-6xl font-bold">{t('title')}</h3>
            <div className="grid lg:grid-cols-3 gap-8 px-8">
                {lastBlogPosts.length && lastBlogPosts.map((post) => (
                    <Pill
                        type={'imagePill'}
                        key={post.slug}
                        description={post.desc}
                        title={post.title}
                        image={post.imgUrl}
                        //date={post.date}
                        link={{
                            value: t('button'),
                            href: `/${lng}/blog/${post.slug}`,
                        }}
                    />
                ))}
            </div>
            <CustomLink href={`/${lng}/blog`} className="text-xl">
                {t('button')}
            </CustomLink>
        </section>
    );
};

export default Blog;
