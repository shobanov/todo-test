import { Grid, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { AppRootStateType } from '../../redux/store';
import { addTodolistAC, TodolistType } from '../../redux/todolists';
import AddItemForm from '../AddItemForm';
import TodolistItem from '../TodolistItem';

const Todolist: React.FC = () => {
  const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists);
  const dispatch = useDispatch();
  
  const addTodolist = (title: string) => {
    dispatch(addTodolistAC(title));
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