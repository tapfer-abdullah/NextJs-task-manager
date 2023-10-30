"use client";
import { AuthContext } from "@/helper/AuthProvider";
import { axiosHttp } from "@/helper/axiosHttp";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const handleLogout = () => {
    axiosHttp.get("/logout").then((res) => {
      if (res.data.status) {
        setUserData({});
        toast.success("Logout successful!");
        window.location.reload();
      }
    });
  };

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
      </div>
      {userData ? (
        <div className="flex items-center gap-2">
          <img src={userData?.imgURL} className="h-10 w-10 rounded-full" />
          <h3>{userData?.email}</h3>
          <button onClick={handleLogout} className="bg-red-500 py-1 px-2 rounded-md">
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-2">
          <Link href={"/auth/login"}>Login</Link>
          <span>|</span>
          <Link href={"/auth/register"}>Register</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
