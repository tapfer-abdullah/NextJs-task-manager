import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-green-400 font-sans font-semibold flex justify-around py-4 text-xl">
      <Link href="/">Task Manager</Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/tasks">All Tasks</Link>
        <Link href="/add-task">Add-Task</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/auth">Auth</Link>
      </div>
      <div className="space-x-2">
        <Link href={"/auth/login"}>Login</Link>
        <span>|</span>
        <Link href={"/auth/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Header;
