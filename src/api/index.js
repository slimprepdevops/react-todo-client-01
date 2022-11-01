import axios from "axios";

const backend_server = process.env.REACT_APP_SERVER_URL || "http://localhost";
const backend_port = process.env.REACT_APP_SERVER_PORT || 5000;
const url = `${backend_server}:${backend_port}/todos`;

console.log("checking env: ");
console.log(process.env.server_url);
console.log("checking env2: ", process.env.server_port);


export const readTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const updateTodo = (id, updatedTodo) =>
  axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);