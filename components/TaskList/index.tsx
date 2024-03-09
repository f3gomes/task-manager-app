"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { RiListCheck } from "react-icons/ri";
import { removeTask } from "@/actions/removeTask";
import { updateTask } from "@/actions/updateTask";
import { getTasksTodo } from "@/actions/getTasksTodo";

import TaskItem from "../TaskItem";
import { getTasksDone } from "@/actions/getTasksDone";

interface TaskProps {
  _id: string;
  desc: string;
  done: boolean;
}

export default function TaskList() {
  const [tasksTodo, setTasksTodo] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  const router = useRouter();

  const handleUpdateTasks = async () => {
    const listTodo = await getTasksTodo();
    const listDone = await getTasksDone();

    setTasksTodo(listTodo);
    setTasksDone(listDone);
  };

  const handleDeleteTask = async (id: string) => {
    await removeTask(id);
    await handleUpdateTasks();
  };

  const handleUpdateTaskState = async (id: string, done: boolean) => {
    const data = { done: done };
    await updateTask(id, data);
    await handleUpdateTasks();
  };

  useEffect(() => {
    handleUpdateTasks();
  }, []);

  return (
    <div className="flex flex-col w-[46rem] h-[18rem] mt-12">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 font-medium cursor-pointer">
          <strong className="text-tm-blue-100" onClick={() => router.push("/")}>
            Tarefas a fazer
          </strong>
        </div>
        <div className="flex gap-2 font-medium cursor-pointer">
          <strong
            className="text-tm-purple-100"
            onClick={() => router.push("/done")}
          >
            Concluídas
          </strong>
        </div>
      </div>

      <div className="flex gap-2">
        <div className={"flex flex-col gap-1 w-1/2"}>
          {tasksTodo?.map((item: TaskProps) => (
            <TaskItem
              key={item._id}
              id={item._id}
              desc={item.desc}
              done={item.done}
              handleDeleteTask={() => handleDeleteTask(item._id)}
              handleUpdateTaskState={() =>
                handleUpdateTaskState(item._id, !item.done)
              }
            />
          ))}
        </div>

        <div className={"flex flex-col gap-1 w-1/2"}>
          {tasksDone?.map((item: TaskProps) => (
            <TaskItem
              key={item._id}
              id={item._id}
              desc={item.desc}
              done={item.done}
              handleDeleteTask={() => handleDeleteTask(item._id)}
              handleUpdateTaskState={() =>
                handleUpdateTaskState(item._id, !item.done)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
