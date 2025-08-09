import React, { useEffect } from "react";
import SearchWidget from "../widgets/searchWidget";
import PostWidget from "../widgets/postWidget";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slices/post";
const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="min-h-svh grid grid-rows-2 gap-y-10  lg:grid-cols-12 px-10 py-10 md:px-20 ">
      {/* Search Utility */}
      <section className="space-y-3 lg:col-span-6">
        <SearchWidget />
        
          {/* Todo enhance UX */}
          {!posts ? <div>Not Posts founds!</div> :
            (posts.length === 0 && (
            <div className="w-full min-h-[10rem] flex justify-center">  <div className=" loading loading-ring w-[4rem]"></div></div>
            )) || <PostWidget posts={posts} />}
        
      </section>
      <section className="lg:block hidden col-span-1"></section>
      <section className="lg:col-span-5 space-y-3 ">
        <h2 className="text-3xl ">Latest </h2>
        <hr className="border-2" />
        lol
      </section>
    </div>
  );
};

export default PostsPage;
