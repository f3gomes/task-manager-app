import TaskItem from "../TaskItem";
import { TaskProps } from "../TaskList";
import { RiListCheck } from "react-icons/ri";

interface TaskListSideProps {
  title: string;
  tasks: TaskProps[];
  handleDeleteTask: (id: string) => void;
  handleUpdateTaskState: (id: string, done: boolean) => void;
}

export function TaskListSide({
  title,
  tasks,
  handleDeleteTask,
  handleUpdateTaskState,
}: TaskListSideProps) {
  return (
    <div className="flex flex-col gap-1 w-1/2 max-md:w-full">
      <div className="flex gap-2 font-medium cursor-pointer">
        <strong className="text-tm-purple-100 hover:text-tm-purple-200 transition duration-300">
          {title}
        </strong>
        <strong>{tasks?.length}</strong>
      </div>
      {tasks?.length > 0 ? (
        tasks?.map((item: TaskProps) => (
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
  );
}
