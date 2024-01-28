import { useState, useEffect } from "react";

export const TempStorage = () => {
  const [tasks, setTasks] = useState(() => {
    const localStorageTasks = localStorage.getItem("tasks");
    return localStorageTasks ? JSON.parse(localStorageTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    setTasks,
  };
};
