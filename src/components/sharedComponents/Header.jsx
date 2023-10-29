import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-green-400 font-sans font-bold space-x-4 text-center py-4 text-2xl">
      <Link href="/">Home</Link>
      <Link href="/tasks">All Tasks</Link>
      <Link href="/add-task">Add-Task</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/auth">Auth</Link>
    </div>
  );
};

export default Header;
