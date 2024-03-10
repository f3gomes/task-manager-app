"use client";

import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

interface TaskInputProps {
  desc: string;
  setDesc: (value: string) => void;
  handleNewTask: any;
}

export default function TaskInput({
  desc,
  setDesc,
  handleNewTask,
}: TaskInputProps) {
  return (
    <div className="flex justify-center gap-2 px-4 -mt-7">
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
