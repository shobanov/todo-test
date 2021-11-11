import { IconButton, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../redux/store';
import { TaskType } from '../../redux/tasks';

type AddItemFormPropsType = {
  addItem: (title: string) => void;
  todolistId?: string;
};

const AddItemForm = ({ addItem, todolistId }: AddItemFormPropsType) => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const allTasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks);
  const tasks = allTasks.filter(task => task.todolistId === todolistId);
  const tasksTitleList = Array.from(new Set(tasks.map(item => item.title)));
  const isTaskTitleExist = Boolean(tasks.length && tasksTitleList.some(item => item === title));
  
  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title.trim());
      setTitle('');
    } else {
      setErrorMessage('Title is required!');
    };
  };

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setTitle(e.currentTarget.value);
  };
 
  const onPressEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isTaskTitleExist) {
      addItemHandler();
    };
  };

  useEffect(() => {
    if (isTaskTitleExist) {
      setErrorMessage('Such title already exists!');
    } else {
      setErrorMessage(null);
    }
  }, [isTaskTitleExist]);

  return (
    <div>
      <TextField
        value={title}
        id="outlined-error-helper-text" 
        variant="outlined"
        label="Type title"
        error={Boolean(errorMessage)}
        onChange={onChangeTitleHandler}
        onKeyPress={onPressEnterHandler}
        className={errorMessage ? "error" : ""}
        helperText={errorMessage}
        size="small"
      />
      <IconButton
        onClick={addItemHandler}
        color="primary"
        disabled={isTaskTitleExist}
      >
        <Add style={{ margin: "-4px" }} />
      </IconButton>
    </div>
  );
};

export default React.memo(AddItemForm);