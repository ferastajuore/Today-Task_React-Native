import { CREATE_TASK, DELETE_TASK } from '../types';

export const createTask = (data) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_TASK, tasks: data });
	} catch (err) {
		console.log(err);
	}
};

export const deleteTask = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_TASK, id });
	} catch (err) {
		console.log(err);
	}
};
