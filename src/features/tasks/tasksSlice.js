import { createSlice } from '@reduxjs/toolkit';


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,       
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        allTasksDone: state => {
            state.tasks.forEach(task => {
                task.done = true;
            });
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        },
    },
});
export const { addTask, toggleHideDone, toggleTaskDone, removeTask, allTasksDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;