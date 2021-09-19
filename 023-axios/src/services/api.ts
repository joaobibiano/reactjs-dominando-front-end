import Axios from "axios";

export const Api = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
