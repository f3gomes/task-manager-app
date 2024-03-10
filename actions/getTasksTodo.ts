import { api } from "../api/axios";

export const getTasksTodo = async () => {
  const res = await api.get("/tasks/todo");
  const data = await res.data;

  return data;
};
