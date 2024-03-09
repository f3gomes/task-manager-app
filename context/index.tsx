"use client";

import { createContext, useEffect, useState } from "react";
import { getTasksTodo } from "../actions/getTasksTodo";
import { getTasksDone } from "@/actions/getTasksDone";

export interface TaskProps {
  _id: string;
  desc: string;
  done: boolean;
}

interface DataProps {
  isLoading: boolean;
  tasksTodo: TaskProps[];
  tasksDone: TaskProps[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTasksTodo: React.Dispatch<React.SetStateAction<any>>;
  setTasksDone: React.Dispatch<React.SetStateAction<any>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const MainContext = createContext({} as DataProps);

export const ContextProvider = ({ children }: ProviderProps) => {
  const [tasksTodo, setTasksTodo] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateTaskList = async () => {
    const todo = await getTasksTodo();
    const done = await getTasksDone();
    setTasksTodo(todo);
    setTasksDone(done);
    setIsLoading(false);
  };

  useEffect(() => {
    updateTaskList();
  }, []);

  return (
    <MainContext.Provider
      value={{
        tasksTodo,
        tasksDone,
        setTasksTodo,
        setTasksDone,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
