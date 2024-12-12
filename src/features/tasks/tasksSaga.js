import { debounce, call, put, takeEvery, select } from "redux-saga/effects";
import {
    fetchExampleTasks,
    fetchExampleTasksError,
    fetchExampleTasksSuccess,
    selectTasks
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks)
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak! Odśwież stronę i spróbuj raz jeszcze.");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield debounce(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
} 