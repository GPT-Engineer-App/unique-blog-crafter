import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Welcome to My Blog</h1>
        <p className="text-center">
          Discover amazing articles and insights.
        </p>
        <div className="text-center mt-4">
          <Link to="/posts" className="text-blue-500 underline">
            Go to Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;