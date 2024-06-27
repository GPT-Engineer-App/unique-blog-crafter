import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const post = {
    1: { title: "First Blog Post", content: "This is the content of the first blog post." },
    2: { title: "Second Blog Post", content: "This is the content of the second blog post." },
  }[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;