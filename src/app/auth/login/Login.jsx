"use client";

import { AuthContext } from "@/helper/AuthProvider";
import { axiosHttp } from "@/helper/axiosHttp";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [clickLoginBtn, setClickLoginBtn] = useState(false);

  const { setClick, click } = useContext(AuthContext);

  const router = useRouter();

  const handleLoginUser = (event) => {
    event.preventDefault();

    if (user.email == "" || user.password == "") {
      toast.warn("Email and Password required!");
      return;
    }

    try {
      setClickLoginBtn(true);
      axiosHttp
        .post("/auth", user)
        .then((res) => {
          if (res.data.status) {
            toast.success("Login successful.");
            setUser({
              email: "",
              password: "",
            });
            setClick(click + 1);
            router.push("/");
            setClickLoginBtn(false);
            // window.location.reload();
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
        });
    } catch (error) {
      console.log(error);
      toast.error("Error ocurred!");
    }
  };

  const handleClear = () => {
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="">
      <form onSubmit={handleLoginUser} className=" bg-slate-300 rounded-xl py-7 px-10 my-5 space-y-5">
        <h3 className="text-xl font-bold text-center">Login Please</h3>
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

        <div className="flex justify-center items-center gap-3 text-white text-lg font-semibold">
          <button disabled={clickLoginBtn} type="submit" className={`bg-green-600 py-1 px-2 rounded-md`}>
            {clickLoginBtn ? "Login..." : "Login"}
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

export default Login;
