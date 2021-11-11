import { Box, Button, Chip, IconButton, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { AppRootStateType } from '../../redux/store';
import AddItemForm from '../AddItemForm/AddItemForm';
import { changeTodolistFilterAC, changeTodolistTitleAC, FilterValuesType, removeTodolistAC } from '../../redux/todolists';
import { addTaskAC, TaskType } from '../../redux/tasks';
import EditableTitle from '../EditableTitle/EditableTitle';
import Task from '../Task/Task';
import { Delete } from '@material-ui/icons';

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
  const isAllTasksComleted = tasks.every(task => task.status === FilterValuesType.completed);

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
    <Box maxWidth="300px" display="flex" flexDirection="column" alignItems="center" style={{ wordBreak: "break-all" }}>
      <Typography color="primary">Created: {date}</Typography>
      {
        isAllTasksComleted &&
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
      <AddItemForm addItem={addTask}/>
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