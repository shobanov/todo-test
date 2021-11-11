import { Box, Button, IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { AppRootStateType } from '../../redux/store';
import AddItemForm from '../AddItemForm';
import { changeTodolistFilterAC, changeTodolistTitleAC, FilterValuesType, removeTodolistAC } from '../../redux/todolists';
import { addTaskAC, TaskType } from '../../redux/tasks';
import EditableTitle from '../EditableTitle';
import Task from '../Task';
import styles from './TodolistItem.module.css';

type TodolistPropsType = {
  todolistId: string;
  title: string;
  filter: FilterValuesType;
  date: string;
};

const TodoList: React.FC<TodolistPropsType> = ({
  todolistId,
  title,
  filter,
  date,
}) => {
  const dispatch = useDispatch();
  const allTasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks);
  const tasks = allTasks.filter(task => task.todolistId === todolistId);
  const isTasksCompleted = tasks.every(task => task.status === FilterValuesType.completed) && tasks.length > 0;

  const removeTodoList = () => {
    dispatch(removeTodolistAC(todolistId));
  };

  const changeTodoListTitle = (newTitle: string) => {
    dispatch(changeTodolistTitleAC(todolistId, newTitle));
  };

  const onAllClickHandler = () => dispatch(changeTodolistFilterAC(FilterValuesType.all, todolistId));
  const onActiveClickHandler = () => dispatch(changeTodolistFilterAC(FilterValuesType.active, todolistId));
  const onCompletedClickHandler = () => dispatch(changeTodolistFilterAC(FilterValuesType.completed, todolistId));

  const addTask = (title: string) => {
    dispatch(addTaskAC(todolistId, title));
  };

  const filteredTasks = tasks.filter(task => {
    return filter === FilterValuesType.all ? true : task.status === filter;
  });
  
  return (
    <Box className={styles.todolistItem}>
      <Typography color="primary">Created: {date}</Typography>
      {
        isTasksCompleted &&
          <Typography color="secondary" >
            All tasks completed
          </Typography>
      }
      <Box>
        <EditableTitle title={title} onChange={changeTodoListTitle}/>
        <IconButton onClick={removeTodoList}>
          <Delete />
        </IconButton>
      </Box>
      <AddItemForm addItem={addTask} todolistId={todolistId}/>
      <div>
        {
          filteredTasks.map(task => <Task key={task.taskId} {...task} />)
        }
      </div>
      <Box mt="15px">
        <Button
          variant={filter === FilterValuesType.all ? 'contained' : 'text'}
          onClick={onAllClickHandler}
          color="primary"
          size="small"
        >
          All
        </Button>
        <Button
          variant={filter === FilterValuesType.active ? 'contained' : 'text'}
          onClick={onActiveClickHandler}
          color="primary"
          size="small"
        >
          Active
        </Button>
        <Button
          variant={filter === FilterValuesType.completed ? 'contained' : 'text'}
          onClick={onCompletedClickHandler}
          color="secondary"
          size="small"
        >
          Completed
        </Button>
      </Box>
    </Box>
  );
};

export default React.memo(TodoList);