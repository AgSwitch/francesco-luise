"use client";

import CustomLink from "@/components/customLink/CustomLink";
import DashboardPostCard from "@/components/dashboardPostCard/DashboardPostCard";
import Loader from "@/components/loader/Loader";
import withAuth from "@/hoc/withAuth";
import useGetBlogPosts from "@/hooks/useGetBlogPosts";
import { auth } from "@/lib/firebaseConfig";
import Link from "next/link";
import { useState } from "react";
import {
  MdAccountCircle,
  MdArrowCircleRight,
  MdClose,
  MdHome,
} from "react-icons/md";
import { toast } from "sonner";

const PageDashboard = () => {
  const { lastBlogPosts, loading, error, refreshPosts } = useGetBlogPosts();
  const [accountOpen, setAccountOpen] = useState(false);
  
  const handleSignOut = () => {
    try {
      auth.signOut();
      toast.success("Logged out");
    } catch (error) {
      toast.error("Error logging out");
      console.log(error.code);
    }
  };

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
        <button onClick={() => setAccountOpen((prev) => !prev)}>
          <MdAccountCircle className="w-12 h-12" />
        </button>
      </div>
      
      <div className="w-full flex items-center flex-col justify-center">
        <div className="flex items-center flex-col bg-background p-8 rounded-lg w-full max-w-4xl">
          <h2 className="text-2xl font-bold pb-8">Posts</h2>
          <div className="flex flex-col w-full max-w-4xl gap-4">
            {lastBlogPosts.length &&
              lastBlogPosts.map((post) => {
                return (
                  <DashboardPostCard
                    key={post.slug}
                    post={post}
                    onDelete={refreshPosts}
                  />
                );
              })}
          </div>
        </div>
      </div>
      
      <div
        className={`fixed bg-primary h-screen w-1/3 min-w-fit text-background transition-transform duration-500 ease-in-out transform ${
          accountOpen ? "translate-x-0" : "translate-x-full"
        } right-0 top-0`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setAccountOpen((prev) => !prev)}
        >
          <MdClose className="w-8 h-8" />
        </button>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-4 p-4 mt-20 ml-4 text-lg hover:text-red-500"
        >
          <p>Logout</p>
          <MdArrowCircleRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default withAuth(PageDashboard);
