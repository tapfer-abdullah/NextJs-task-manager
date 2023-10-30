"use client";

import { axiosHttp } from "@/helper/axiosHttp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import addTaskImg from "../../assets/addTask.svg";

const AddTask = () => {
  const [task, setTask] = useState({
    userEmail: "aaaaaaaa@bk.com",
    description: "",
    title: "",
    status: "none",
  });

  const router = useRouter();

  const handleAddTask = (event) => {
    event.preventDefault();
    // console.log(task);

    try {
      axiosHttp.post("/tasks", task).then((res) => {
        if (res.data.status) {
          toast.success("Task added!");
          setTask({
            description: "",
            title: "",
            status: "none",
          });
          router.push("/tasks");
        } else {
          toast.error("Failed to add!");
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Error ocurred!");
    }
  };

  const handleClear = () => {
    setTask({
      userEmail: "aaaaaaaa@bk.com",
      description: "",
      title: "",
      status: "none",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <form onSubmit={handleAddTask} className="col-span-6 col-start-4 bg-slate-300 rounded-xl py-5 px-5 my-5 space-y-5">
        <div>
          <Image className="w-1/2 mx-auto" src={addTaskImg} alt="Add task img" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="task_title">
            Title
          </label>
          <input
            value={task?.title}
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
            }}
            className="w-full py-1 px-2 rounded-xl"
            type="text"
            name="title"
            id=""
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="task_descriptions">
            Descriptions
          </label>
          <textarea
            value={task?.description}
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
            className="w-full p-2 rounded-xl"
            name="description"
            id=""
            rows="3"
          ></textarea>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="task_status">
            Status
          </label>
          <select
            value={task.status}
            onChange={(e) => {
              setTask({ ...task, status: e.target.value });
            }}
            className="w-full p-1 rounded-xl"
            name="status"
            id=""
          >
            <option value="none" selected disabled>
              ---Select status---
            </option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="success">Success</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-3 text-white text-lg font-semibold">
          <button type="submit" className="bg-green-600 py-1 px-2 rounded-md">
            Add Task
          </button>
          <span onClick={handleClear} className="bg-red-600 py-1 px-2 rounded-md hover:cursor-pointer">
            Clear
          </span>
        </div>
      </form>

      {/* <div>{JSON.stringify(task)}</div> */}
      <div></div>
    </div>
  );
};

export default AddTask;
