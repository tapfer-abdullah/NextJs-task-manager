"use client";

import { axiosHttp } from "@/helper/axiosHttp";
import React, { useEffect, useState } from "react";

const AllTasks = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    axiosHttp.get("/tasks").then((res) => setAllTasks(res.data));
  }, []);

  return (
    <div className="my-5 min-h-[80vh]">
      <h3 className="text-xl font-semibold text-center my-5">All Tasks</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {allTasks.map((task) => (
          <div key={task._id}>
            <div className="border bg-blue-300 p-5 rounded-xl">
              <h3 className="text-lg font-semibold">{task?.title}</h3>
              <p>{task?.description}</p>
              <p>{task?.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
