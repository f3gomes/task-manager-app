"use client";

import React, { useEffect, useState } from "react";

import { RiListCheck } from "react-icons/ri";
import { removeTask } from "@/actions/removeTask";
import { updateTask } from "@/actions/updateTask";
import { getTasksTodo } from "@/actions/getTasksTodo";

import TaskItem from "../TaskItem";
import { getTasksDone } from "@/actions/getTasksDone";
import toast from "react-hot-toast";

interface TaskProps {
  _id: string;
  desc: string;
  done: boolean;
}

export default function TaskList() {
  const [tasksTodo, setTasksTodo] = useState<TaskProps[] | null>(null);
  const [tasksDone, setTasksDone] = useState<TaskProps[] | null>(null);

  const handleUpdateTasks = async () => {
    const listTodo = await getTasksTodo();
    const listDone = await getTasksDone();

    setTasksTodo(listTodo);
    setTasksDone(listDone);
  };

  const handleDeleteTask = async (id: string) => {
    if (confirm("Excluir tarefa?")) {
      await removeTask(id);
      await handleUpdateTasks();

      toast.success("Tarefa excluida com sucesso");
    }
  };

  const handleUpdateTaskState = async (id: string, done: boolean) => {
    if (confirm("Atualizar status?")) {
      const data = { done: done };
      await updateTask(id, data);
      await handleUpdateTasks();

      toast.success("Status da tarefa atualizado");
    }
  };

  useEffect(() => {
    handleUpdateTasks();
  }, []);

  if (!tasksTodo || !tasksDone) {
    return (
      <div className="flex justify-center w-[46rem] h-[18rem] mt-12">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[46rem] h-[18rem] mt-12 px-4">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 font-medium cursor-pointer">
          <strong className="text-tm-blue-100 hover:text-tm-blue-200 transition duration-300">
            Tarefas a fazer
          </strong>
          <strong>{tasksTodo?.length}</strong>
        </div>
        <div className="flex gap-2 font-medium cursor-pointer">
          <strong className="text-tm-purple-100 hover:text-tm-purple-200 transition duration-300">
            Concluídas
          </strong>
          <strong>{tasksDone?.length}</strong>
        </div>
      </div>

      <div className="flex gap-2">
        <div className={"flex flex-col gap-1 w-1/2"}>
          {tasksTodo?.length > 0 ? (
            tasksTodo?.map((item: TaskProps) => (
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
            ))
          ) : (
            <div className="flex gap-2 items-center mt-4">
              <RiListCheck />
              Nenhuma
            </div>
          )}
        </div>

        <div className={"flex flex-col gap-1 w-1/2"}>
          {tasksDone?.length > 0 ? (
            tasksDone?.map((item: TaskProps) => (
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
            ))
          ) : (
            <div className="flex gap-2 justify-end items-center mt-4">
              <RiListCheck />
              Nenhuma
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
