import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegCircle, FaTrash } from "react-icons/fa";

interface TaskItemProps {
  id: string;
  desc: string;
  done: boolean;
  handleDeleteTask: (id: string) => void;
  handleUpdateTaskState: (id: string) => void;
}

export default function TaskItem({
  id,
  desc,
  done,
  handleDeleteTask,
  handleUpdateTaskState,
}: TaskItemProps) {
  let styleClass = done ? "styles.taskCreated" : "styles.taskFinished";

  return (
    <div className="bg-tm-gray-500 rounded-lg h-[4.5rem] flex items-center justify-between py-0 px-5">
      <span className={styleClass}>
        {!done ? (
          <FaRegCircle
            onClick={() => handleUpdateTaskState(id)}
            className="text-tm-b-100 hover:text-tm-blue-200"
          />
        ) : (
          <BsCheckCircleFill
            onClick={() => handleUpdateTaskState(id)}
            className="text-tm-purple-200 hover:text-tm-purple-100"
          />
        )}
      </span>
      <p className={`${done && "line-through"}`}>{desc}</p>
      <span onClick={() => handleDeleteTask(id)}>
        <FaTrash className="text-tm-gray-300 hover:text-tm-red-200" />
      </span>
    </div>
  );
}
