"use client";

import React, { useEffect, useState } from "react";

import { removeTask } from "@/actions/removeTask";
import { updateTask } from "@/actions/updateTask";
import { getTasksTodo } from "@/actions/getTasksTodo";

import { getTasksDone } from "@/actions/getTasksDone";
import toast from "react-hot-toast";
import TaskInput from "../TaskInput";
import { createTask } from "@/actions/createTaskt";
import { TaskListSide } from "../TaskListSide";

export interface TaskProps {
  _id: string;
  desc: string;
  done: boolean;
}

export default function TaskList() {
  const [tasksTodo, setTasksTodo] = useState<TaskProps[] | null>(null);
  const [tasksDone, setTasksDone] = useState<TaskProps[] | null>(null);
  const [desc, setDesc] = useState("");

  const handleUpdateTasks = async () => {
    const listTodo = await getTasksTodo();
    const listDone = await getTasksDone();

    setTasksTodo(listTodo);
    setTasksDone(listDone);
  };

  const handleNewTask = async () => {
    if (desc === "") {
      alert("Digite uma descrição!");
    } else {
      const data = { desc };
      await createTask(data);
      await handleUpdateTasks();
      setDesc("");

      toast.success("Tarefa criada com sucesso");
    }
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
      <div className="flex flex-col">
        <div className="flex justify-center">
          <TaskInput
            desc={desc}
            setDesc={setDesc}
            handleNewTask={handleNewTask}
            disabled={!tasksTodo || !tasksDone}
          />
        </div>
        <div className="flex justify-center w-[46rem] h-[18rem] mt-12">
          <h1>Carregando...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col pb-6">
      <div className="flex justify-center">
        <TaskInput
          desc={desc}
          setDesc={setDesc}
          handleNewTask={handleNewTask}
          disabled={!tasksTodo || !tasksDone}
        />
      </div>

      <div className="flex gap-2 w-[46rem] mt-12 max-md:flex-col max-md:w-full max-md:gap-4">
        <TaskListSide
          title="Tarefas a fazer"
          tasks={tasksTodo}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTaskState={handleUpdateTaskState}
        />

        <TaskListSide
          title="Concluídas"
          tasks={tasksDone}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTaskState={handleUpdateTaskState}
        />
      </div>
    </div>
  );
}
