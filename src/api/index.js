import axios from "axios";

const backend_server = process.env.server || "http://localhost";
const backend_port = process.env.PORT || 5000;
const url = `${backend_server}:${backend_port}/todos`;


export const readTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const updateTodo = (id, updatedTodo) =>
  axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);