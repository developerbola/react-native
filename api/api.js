import axios from "axios";

const url = "https://f2648ef7774a9dec.mokky.dev/tasks";
const today = +`${
  new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()
}${
  new Date().getMonth() + 1 < 10
    ? "0" + (new Date().getMonth() + 1)
    : new Date().getMonth() + 1
}${new Date().getFullYear()}`;

const newTaskSchema = {
  id: today,
  tasks: [
    {
      task: "abet",
      time: "14:00 - 14:30",
      isCompleted: true,
      color: "red",
      id: 0,
    },
    {
      task: "dars",
      time: "14:30 - 15:30",
      isCompleted: false,
      color: "yellow",
      id: 1,
    },
    {
      task: "yana",
      time: "15:30 - 16:00",
      isCompleted: false,
      color: "purple",
      id: 2,
    },
    {
      task: "yana mana",
      time: "16:00 - 16:30",
      isCompleted: false,
      color: "green",
      id: 3,
    },
  ],
};

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
