import axios from "axios";

const url = "https://f2648ef7774a9dec.mokky.dev/tasks";

export const api = {
  getTasks: async () => {
    const { data } = await axios.get(url);
    return data;
  },
  postTasks: async (task) => {
    axios.patch(url, task);
  },
  deleteTask: async (taskId) => {
    try {
      const { data } = await axios.delete(`${url}/${taskId}`);
      return data;
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },
};

console.log(api.getTasks());