import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import taskReducer from './reducer/taskReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default () => {
	const store = createStore(
		combineReducers({
			// Here is All Reducers
			tasks: taskReducer,
		}),
		composeEnhancers(applyMiddleware(thunkMiddleware))
	);

	return store;
};
