import { Grid, Paper } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { AppRootStateType } from '../../redux/store';
import { addTodolistAC, TodolistType } from '../../redux/todolists';
import AddItemForm from '../AddItemForm/AddItemForm';
import TodolistItem from '../TodolistItem/TodolistItem';

const Todolist: React.FC = () => {
  const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists);
  const dispatch = useDispatch();
  
  const addTodolist = (title: string) => {
    const todolistId = uuidv4();
    
    dispatch(addTodolistAC(todolistId, title));
  };

  return (
    <>
      <Grid container style={{ padding: "30px 0" }}>
        <AddItemForm addItem={addTodolist} />
      </Grid>
      <Grid container spacing={3}>
        {
          todolists.map(todolist => {
            return (
              <Grid item key={todolist.id}>
                <Paper elevation={3} style={{ padding: "15px" }}>
                  <TodolistItem 
                    todolistId={todolist.id}
                    title={todolist.title}
                    filter={todolist.filter}
                    date={todolist.date}
                  />
                </Paper>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  );
};

export default React.memo(Todolist);