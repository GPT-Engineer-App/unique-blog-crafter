import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    { id: 1, title: "First Blog Post", summary: "This is the summary of the first blog post." },
    { id: 2, title: "Second Blog Post", summary: "This is the summary of the second blog post." },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link to={`/posts/${post.id}`} className="text-blue-500 underline">
              {post.title}
            </Link>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;