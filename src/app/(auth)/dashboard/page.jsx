"use client";

import CustomButton from "@/components/customButton/CustomButton";
import CustomLink from "@/components/customLink/CustomLink";
import useGetBlogPosts from "@/hooks/useGetBlogPost";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdAccountCircle, MdHome } from "react-icons/md";

const PageDashboard = () => {
  const { lastBlogPosts, loading, error } = useGetBlogPosts();

  return (
    <div className="bg-secondary min-h-screen flex w-full">
      <div className="fixed left-0 top-0 w-full border-b-2 border-primary flex justify-between p-4 items-center">
      <Link href="/it">
          <MdHome className="w-12 h-12"/>
        </Link>
        <div className="flex-1 flex justify-center">
          <CustomLink href="dashboard/blog" >Crea nuovo post</CustomLink>
        </div>
        <Link href="#">
          <MdAccountCircle className="w-12 h-12"/>
        </Link>
      </div>
      <div className="w-full flex items-center flex-col justify-center">
        <div className="flex items-center flex-col bg-background p-8 rounded-lg w-full max-w-4xl">
          <h2 className="text-2xl font-bold pb-8">Posts</h2>
          <div className="flex flex-col w-full max-w-4xl gap-4">
            {lastBlogPosts.length &&
              lastBlogPosts.map((post) => {
                return (
                  <div
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex justify-between border-2 w-full p-4 border-primary  rounded-lg bg-background hover:bg-secondary"
                  >
                    <p>{post.title}</p>
                    <div className="flex gap-4">
                      <button className="rounded-full w-8 h-8">
                        <CiEdit className="w-full h-full text-primary" />
                      </button>
                      <button className="rounded-full w-8 h-8">
                        <IoIosRemoveCircleOutline className="w-full h-full text-red-500" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageDashboard;
