import { Delete } from '@material-ui/icons';
import { Box, Checkbox, IconButton } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../../redux/tasks-reducer';
import EditableTitle from '../EditableTitle/EditableTitle'

type TaskPropsType = {
  taskId: string;
  title: string;
  isDone: boolean;
};

const Task: React.FC<TaskPropsType> = ({
  taskId,
  title,
  isDone,
}) => {
  const dispatch = useDispatch();

  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTaskStatusAC(taskId, e.currentTarget.checked));
  };

  const changeTaskTitle = (newTitle: string) => {
    dispatch(changeTaskTitleAC(taskId, newTitle));
  };

  const removeTask = () => {
    dispatch(removeTaskAC(taskId));
  };
  // const isDone = task.status === FilterValuesType.completed
  return (
    <Box display="flex" alignItems="center" justifyContent="space-around">
      <Checkbox
        checked={isDone}
        color="primary"
        onChange={changeTaskStatus}
      />
      <EditableTitle title={title} onChange={changeTaskTitle} />
      <IconButton onClick={removeTask}>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default React.memo(Task);