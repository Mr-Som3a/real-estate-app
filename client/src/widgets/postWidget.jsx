import React from "react";
import { Link } from "react-router-dom";

const PostWidget = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="card card-side bg-base-100 shadow-sm">
          <figure className="">
            <img
              className="p-3 rounded-2xl w-[20rem] h-auto "
              src={post.images[0] || "https://static.thenounproject.com/png/737043-200.png"}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <div className="text-xl">
              Pirce: <span className="text-red-500">{post.price}$</span>{" "}
            </div>
            <p className="textarea-md">{post.text}</p>
            <p className="text-blue-950 font-semibold">City: {post.city}</p>
            <div className="card-actions justify-end">
              <Link to={"/postDetails"} className="btn btn-primary" state={{post}}>
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostWidget;
