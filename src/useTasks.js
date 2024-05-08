import { useState, useEffect } from "react";

export const useTasks = (initialValue) => {
    const getInitialState = () => {
        const localStorageValue = localStorage.getItem("tasks");
        if (localStorageValue === null) {
            return initialValue;
        }

        return JSON.parse(localStorage.getItem("tasks")) || [];
    };
    const [tasks, setTasks] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addNewTask = (content) => {
        setTasks(task => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[task.length - 1].id + 1 : 1,
            }
        ]);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };


    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    };

    const allTasksDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };


    return {
        tasks,
        addNewTask,
        removeTask,
        toggleTaskDone,
        allTasksDone
    };
};