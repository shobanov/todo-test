import { v4 as uuidv4 } from 'uuid';

const initialState: Array<TaskType> = [];

export const tasksReducer = (state: Array<TaskType> = initialState, action: ActionsType): Array<TaskType> => {
  switch (action.type) {
    case 'ADD-TASK':
      return (
        [
          ...state,
          {
            todolistId: action.todolistId,
            taskId: action.taskId,
            title: action.title,
            isDone: false,
            date: ''
          }
        ]
      );
    case 'REMOVE-TASK':
      return state.filter(task => task.taskId !== action.taskId);
    case 'CHANGE-TASK-STATUS':
      return state.map(task => task.taskId === action.taskId ? {...task, isDone: action.status} : task);
    case 'CHANGE-TASK-TITLE':
      return state.map(task => task.taskId === action.taskId ? {...task, title: action.newTitle} : task);
    default:
      return state;
  };
};

// actions
export const removeTaskAC = (taskId: string) => ({ type: 'REMOVE-TASK', taskId } as const);
export const addTaskAC = (todolistId: string, title: string) => ({ type: 'ADD-TASK', todolistId, taskId: uuidv4(), title } as const);
export const changeTaskStatusAC = (taskId: string, status: boolean) => ({type: 'CHANGE-TASK-STATUS', taskId, status} as const);
export const changeTaskTitleAC = (taskId: string, newTitle: string) => ({ type: 'CHANGE-TASK-TITLE', taskId, newTitle } as const);

// types
export type ActionsType =
  | ReturnType<typeof removeTaskAC>
  | ReturnType<typeof addTaskAC>
  | ReturnType<typeof changeTaskStatusAC>
  | ReturnType<typeof changeTaskTitleAC>;

export type TaskType = {
  todolistId: string;
  taskId: string;
  title: string;
  isDone: boolean;
  date: string;
};

export type TasksStateType = {
  [key: string]: Array<TaskType>;
};

export type TaskStatusType = boolean;