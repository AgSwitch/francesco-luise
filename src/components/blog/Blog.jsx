'use client';

import Pill from '../pill/Pill';
import CustomLink from '../customLink/CustomLink';
import { useTranslations } from 'next-intl';
import useGetBlogPosts from '@/hooks/useGetBlogPosts';
import Loader from '../loader/Loader';

const Blog = ({ lng }) => {
    const { lastBlogPosts, loading, error } = useGetBlogPosts(3);
    const t = useTranslations('blog');

    if (loading) return <Loader />;

    return (
        <>
            {
                lastBlogPosts.length ?
                    (<section
                        id="blog"
                        className=" min-h-screen bg-secondary py-20 flex flex-col items-center justify-center gap-10"
                    >
                        <h3 className="text-6xl font-bold">{t('title')}</h3>
                        <div className="grid lg:grid-cols-3 gap-8 px-8 w-full">
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
                        <CustomLink href={`/${lng}/blog`} className="text-base">
                            {t('button')}
                        </CustomLink>
                    </section>) : <></>
            }
        </>
    );
};

export default Blog;
