import { Box, Button, IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { AppRootStateType } from '../../redux/store'
import AddItemForm from '../AddItemForm/AddItemForm'
import { changeTodolistFilterAC, changeTodolistTitleAC, FilterValuesType, removeTodolistAC } from '../../redux/todolists-reducer'
import { addTaskAC, TaskType } from '../../redux/tasks-reducer'
import EditableTitle from '../EditableTitle/EditableTitle'
import Task from '../Task/Task'

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
  const tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks);
  const dispatch = useDispatch();

  const removeTodoList = () => {
    dispatch(removeTodolistAC(todolistId));
  };

  const changeTodoListTitle = (newTitle: string) => {
    dispatch(changeTodolistTitleAC(todolistId, newTitle))
  };

  const onAllClickHandler = () => dispatch(changeTodolistFilterAC(FilterValuesType.all, todolistId));
  const onActiveClickHandler = () => dispatch(changeTodolistFilterAC(FilterValuesType.active, todolistId));
  const onCompletedClickHandler = () => dispatch(changeTodolistFilterAC(FilterValuesType.completed, todolistId));

  const addTask = (title: string) => {
    dispatch(addTaskAC(todolistId, title));
  };

  /*
    const filteredTasks = tasks.filter(task => FilterValuesType[filter]);

    jsx filteredTasks.map
  */

  let tasksForTodoList = tasks;

  if (filter === FilterValuesType.active) {
    tasks.filter(task => task.isDone === false);
  };
  if (filter === FilterValuesType.completed) {
    tasks.filter(task => task.isDone === true);
  };
  // redux status emum

  // task.status === FilterValuesType.completed

  return (
    <Box maxWidth="300px" style={{ wordBreak: "break-all" }}  >
      <Typography>Created: {date}</Typography>
      <h3>
        <EditableTitle title={title} onChange={changeTodoListTitle}/>
        <IconButton onClick={removeTodoList}>
          <Delete />
        </IconButton>
      </h3>
      <AddItemForm addItem={addTask}/>
      <div>
        {
          tasksForTodoList.map(task => task.todolistId === todolistId && <Task key={task.taskId} {...task} />)
        }
      </div>
      <div>
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
      </div>
    </Box>
  );
};

export default React.memo(TodoList);