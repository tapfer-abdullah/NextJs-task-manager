"use client";

import { AuthContext } from "@/helper/AuthProvider";
import { axiosHttp } from "@/helper/axiosHttp";
import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const AllTasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    axiosHttp.get(`/tasks?email=${userData?.email}`).then((res) => {
      setAllTasks(res.data);
      setLoading(false);
    });
  }, []);

  console.log(allTasks);

  return (
    <div className="my-5 min-h-[80vh] mx-20">
      <h3 className="text-xl font-semibold text-center my-5">All Tasks</h3>
      {loading && <p className="text-center">Loading tasks.........</p>}

      {/* onBeforeCapture={onBeforeCapture} onBeforeDragStart={onBeforeDragStart} onDragStart={onDragStart} onDragUpdate={onDragUpdate}  */}

      <DragDropContext onDragEnd={""}>
        {/* <Droppable droppableId="allToDos">
          {(provided) => {
            <div href={provided.innerRef} {...provided.droppableProps}>
              <p>ll</p>
              {allTasks.map((task) => (
                <div key={task._id} className="border bg-blue-300 p-5 rounded-xl hover:scale-105 transition-all hover:shadow-md">
                  <h3 className="text-lg font-semibold">{task?.title}</h3>
                  <p>{task?.description}</p>
                  <p>{task?.status}</p>
                </div>
              ))}
            </div>;
          }}
        </Droppable> */}

        <Droppable droppableId="allToDos">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h4>My draggable</h4>
              {allTasks.map((task) => (
                <div key={task._id}>
                  <div className="border bg-blue-300 p-5 rounded-xl hover:scale-105 transition-all hover:shadow-md">
                    <h3 className="text-lg font-semibold">{task?.title}</h3>
                    <p>{task?.description}</p>
                    <p>{task?.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="allToDos">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {allTasks.map((task) => (
                <div key={task._id}>
                  <div className="border bg-blue-300 p-5 rounded-xl hover:scale-105 transition-all hover:shadow-md">
                    <h3 className="text-lg font-semibold">{task?.title}</h3>
                    <p>{task?.description}</p>
                    <p>{task?.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId="draggable-11x" index={0}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="border bg-blue-300 p-5 rounded-xl hover:scale-105 transition-all hover:shadow-md">
                      <h3 className="text-lg font-semibold">task?.title</h3>
                      <p>task?.description</p>
                      <p>task?.status</p>
                    </div>
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="bg-emerald-200 p-5 min-h-[70vh] shadow-md rounded-xl">
          <h4 className="text-lg font-semibold my-2 text-blue-400">Pending</h4>
          {allTasks.map((task) => (
            <div key={task._id}>
              <div className="border bg-blue-300 p-5 rounded-xl hover:scale-105 transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold">{task?.title}</h3>
                <p>{task?.description}</p>
                <p>{task?.status}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-emerald-200 p-5 min-h-[70vh] shadow-md rounded-xl">
          <h4 className="text-lg font-semibold my-2 text-yellow-500 ">Processing</h4>
        </div>
        <div className="bg-emerald-200 p-5 min-h-[70vh] shadow-md rounded-xl">
          <h4 className="text-lg font-semibold my-2 text-green-500">Successful</h4>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
