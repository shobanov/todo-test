import { Delete } from '@material-ui/icons';
import { Box, Checkbox, IconButton } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../../redux/tasks-reducer';
import EditableTitle from '../EditableTitle/EditableTitle';
import { FilterValuesType } from '../../redux/todolists-reducer';

type TaskPropsType = {
  taskId: string;
  title: string;
  status: FilterValuesType;
};

const Task: React.FC<TaskPropsType> = ({
  taskId,
  title,
  status,
}) => {
  const dispatch = useDispatch();

  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const statusTask = e.currentTarget.checked ? FilterValuesType.completed : FilterValuesType.active;
    dispatch(changeTaskStatusAC(taskId, statusTask));
  };

  const changeTaskTitle = (newTitle: string) => {
    dispatch(changeTaskTitleAC(taskId, newTitle));
  };

  const removeTask = () => {
    dispatch(removeTaskAC(taskId));
  };

  const isDone = status === FilterValuesType.completed

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