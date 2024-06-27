import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">
          Home
        </Link>
        <Link to="/posts" className="text-white text-lg">
          Blog Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;