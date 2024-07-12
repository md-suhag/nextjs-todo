import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-w-screen-md mx-auto py-2 ">
      <h3 className="font-semibold text-purple-700 text-xl">Todo App</h3>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
