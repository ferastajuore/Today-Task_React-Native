import { GET_TASKS, CREATE_TASK, DELETE_TASK } from '../../types';

// Fack data
// import { dataTask } from './data';

const initialState = {
	tasks: [],
	task: {},
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TASKS:
			return { ...state, tasks: action.tasks };

		case CREATE_TASK:
			return { ...state, tasks: [action.tasks, ...state.tasks] };

		case DELETE_TASK:
			return { ...state, tasks: state.tasks.filter((task) => task.id !== action.id) };

		default:
			return state;
	}
};

export default taskReducer;
