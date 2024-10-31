import axios from "axios";

const url = "https://f2648ef7774a9dec.mokky.dev/tasks";

export const api = {
  getTasks: async () => {
    const { data } = await axios.get(url);
    return data;
  },

  postTasks: async (task) => {
    await axios.patch(url, task);
  },

  deleteTask: async (taskId) => {
    await axios.delete(`${url}/${taskId}`);
  },

  makeCompleted: async (id) => {
    try {
      await axios.patch(`${url}/${id}`, {
        isCompleted: true,
      });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  },
};
