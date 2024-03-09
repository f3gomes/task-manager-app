"use client";

import React, { useContext, useState } from "react";

import { MainContext } from "@/context";
import { createTask } from "@/actions/createTaskt";
import { getTasksTodo } from "@/actions/getTasksTodo";
import { getTasksDone } from "@/actions/getTasksDone";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export default function TaskInput() {
  const [desc, setDesc] = useState("");
  const { setTasksTodo, setTasksDone } = useContext(MainContext);

  const handleNewTask = async () => {
    if (desc === "") {
      alert("Digite uma descrição!");
    } else {
      const data = { desc };
      await createTask(data);
      setDesc("");

      const todo = await getTasksTodo();
      const done = await getTasksDone();

      setTasksTodo(todo);
      setTasksDone(done);
    }
  };

  return (
    <div className="flex justify-center gap-3 -mt-7">
      <input
        type="text"
        value={desc}
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setDesc(event.target.value)}
        className="w-[28rem] h-[54px] p-4 rounded-lg bg-tm-gray-500 text-tm-gray-300 font-normal text-base"
      />
      <button
        onClick={handleNewTask}
        className="bg-tm-blue-200 text-tm-gray-100 rounded-lg w-[90px] font-semibold text-sm flex justify-center items-center gap-1 cursor-pointer hover:bg-tm-blue-100 transition duration-300"
      >
        Criar <MdOutlineAddCircleOutline size={15} />
      </button>
    </div>
  );
}
