const initialState: Array<TodolistType> = [];

const createDate = () => {
  const date = new Date();

  const formatter = new Intl.DateTimeFormat("en-US",{
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatter.format(date);
};

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
  
  switch (action.type) {
    case 'ADD-TODOLIST':
      return [
        {
          ...action,
          filter: FilterValuesType.all, 
        }, 
        ...state
      ];
    case 'REMOVE-TODOLIST':
      return state.filter(todolist => todolist.id !== action.id);
    case 'CHANGE-TODOLIST-TITLE':
      return state.map(todolist => todolist.id === action.id ? {...todolist, title: action.newTitle} : todolist);
    case 'CHANGE-TODOLIST-FILTER':
      return state.map(todolist => todolist.id === action.id ? {...todolist, filter: action.value} : todolist);
    default:
      return state;
  };
};

//actions
export const addTodolistAC = (id: string, title: string) => ({ type: 'ADD-TODOLIST', id, title, date: createDate() } as const);
export const removeTodolistAC = (id: string) => ({ type: 'REMOVE-TODOLIST', id } as const);
export const changeTodolistTitleAC = (id: string, newTitle: string) => ({ type: 'CHANGE-TODOLIST-TITLE', id, newTitle } as const);
export const changeTodolistFilterAC = (value: FilterValuesType, id: string) => ({ type: 'CHANGE-TODOLIST-FILTER', value, id } as const);

//types
type ActionsType =
  | ReturnType<typeof addTodolistAC>
  | ReturnType<typeof addTodolistAC>
  | ReturnType<typeof changeTodolistTitleAC>
  | ReturnType<typeof removeTodolistAC>
  | ReturnType<typeof changeTodolistFilterAC>;

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
  date: string;
};

export enum FilterValuesType {
  all, active, completed
}

