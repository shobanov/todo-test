import { combineReducers, createStore } from 'redux';
import { tasksReducer } from './tasks-reducer';
import { todolistsReducer } from './todolists-reducer';

// creating the structure of the state object
const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer,
});

// create store
export const store = createStore(rootReducer);

// define the type of the entire state object
export type AppRootStateType = ReturnType<typeof rootReducer>;