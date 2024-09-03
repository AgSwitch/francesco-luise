"use client";

import CustomLink from "@/components/customLink/CustomLink";
import DashboardPostCard from "@/components/dashboardPostCard/DashboardPostCard";
import Loader from "@/components/loader/Loader";
import withAuth from "@/hoc/withAuth";
import useGetBlogPosts from "@/hooks/useGetBlogPost";
import Link from "next/link";
import { MdAccountCircle, MdHome } from "react-icons/md";

const PageDashboard = () => {
  const { lastBlogPosts, loading, error, refreshPosts } = useGetBlogPosts();

  if (loading) return <Loader />;
  return (
    <div className="bg-secondary min-h-screen flex w-full">
      <div className="fixed left-0 top-0 w-full border-b-2 border-primary flex justify-between p-4 items-center">
        <Link href="/it">
          <MdHome className="w-12 h-12" />
        </Link>
        <div className="flex-1 flex justify-center">
          <CustomLink href="dashboard/blog">Crea nuovo post</CustomLink>
        </div>
        <Link href="#">
          <MdAccountCircle className="w-12 h-12" />
        </Link>
      </div>
      <div className="w-full flex items-center flex-col justify-center">
        <div className="flex items-center flex-col bg-background p-8 rounded-lg w-full max-w-4xl">
          <h2 className="text-2xl font-bold pb-8">Posts</h2>
          <div className="flex flex-col w-full max-w-4xl gap-4">
            {lastBlogPosts.length &&
              lastBlogPosts.map((post) => {
                return <DashboardPostCard key={post.slug} post={post} onDelete={refreshPosts} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default withAuth(PageDashboard);
