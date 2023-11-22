"use client";

import { axiosHttp } from "@/helper/axiosHttp";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    imgURL: "",
    address: "",
  });

  const [clickRegisterBtn, SetClickRegisterBtn] = useState(false);

  const router = useRouter();

  const handleAddUser = (event) => {
    event.preventDefault();

    if (user.email == "" || user.password == "") {
      toast.warn("Email and Password required!");
      return;
    }

    try {
      SetClickRegisterBtn(true);
      axiosHttp.post("/users", user).then((res) => {
        if (res.data.status) {
          toast.success("Registration successful.");
          setUser({
            name: "",
            email: "",
            password: "",
            about: "",
            imgURL: "",
            address: "",
          });
          router.push("/auth/login");
          SetClickRegisterBtn(false);
        } else {
          toast.error("Failed to register!");
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Error ocurred!");
    }
  };

  const handleClear = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
      imgURL: "",
      address: "",
    });
  };

  return (
    <div className="">
      <form onSubmit={handleAddUser} className=" bg-slate-300 rounded-xl py-7 px-10 my-5 space-y-5">
        <h3 className="text-xl font-bold text-center">Register Please</h3>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="user_title">
            Name
          </label>
          <input
            placeholder="Enter name"
            value={user?.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            className="w-full py-1 px-2 rounded-xl"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="user_title">
            Email
          </label>
          <input
            placeholder="Enter email address"
            value={user?.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            className="w-full py-1 px-2 rounded-xl"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="user_title">
            Password
          </label>
          <input
            placeholder="Enter password"
            value={user?.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            className="w-full py-1 px-2 rounded-xl"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="user_title">
            Image URL
          </label>
          <div className="relative">
            <img className="w-6 h-6 absolute top-1 left-1 rounded-full" src={user?.imgURL || "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"} alt="imgURL" />
            <input
              placeholder="Enter Image URL"
              value={user?.imgURL}
              onChange={(e) => {
                setUser({ ...user, imgURL: e.target.value });
              }}
              className="w-full py-1 pr-2 pl-9 rounded-xl"
              type="text"
              name="imgURL"
              id="imgURL"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="user_abouts">
            About
          </label>
          <textarea
            placeholder="About yourself....."
            value={user?.about}
            onChange={(e) => {
              setUser({ ...user, about: e.target.value });
            }}
            className="w-full p-2 rounded-xl"
            name="about"
            id="about"
            rows="3"
          ></textarea>
        </div>

        <div className="flex justify-center items-center gap-3 text-white text-lg font-semibold">
          <button disabled={clickRegisterBtn} type="submit" className="bg-green-600 py-1 px-2 rounded-md">
            {clickRegisterBtn ? "Registering..." : "Register"}
          </button>
          <span onClick={handleClear} className="bg-red-600 py-1 px-2 rounded-md hover:cursor-pointer">
            Reset
          </span>
        </div>
      </form>

      {/* <div>{JSON.stringify(user)}</div> */}
      <div></div>
    </div>
  );
};

export default Register;
