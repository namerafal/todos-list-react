import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLokalStorage } from './tasksLocalStorage';
import { createSelector } from 'reselect';


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLokalStorage(),
        hideDone: false,
        isLoading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        allTasksDone: state => {
            state.tasks.forEach(task => {
                task.done = true;
            });
        },
        removeTask: (state, { payload: taskId }) => {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
        fetchExampleTasks: state => {
            state.isLoading = true;
        },

        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.isLoading = false;
        },

        fetchExampleTasksError: state => {
            state.isLoading = false;
        },

        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.isLoading = false;
        },

    },
});


export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    allTasksDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
    setTasks
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
const selectQuery = (state, query) => query;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsLoading = state => selectTasksState(state).isLoading;
export const selectNotEmptyTask = state => selectTasks(state).length > 0;
export const selectIsSomeTaskDone = state => selectTasks(state).some(({ done }) => done);
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId)

export const selectTasksByQuery = createSelector(
    [selectTasks, selectQuery],
    (tasks, query) => {
        if (!query || query.trim() === "") {
            return tasks;
        }

        return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
    }
);


export default tasksSlice.reducer;