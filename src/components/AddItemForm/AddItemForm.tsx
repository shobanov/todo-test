import { IconButton, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { ChangeEvent, useState, KeyboardEvent } from 'react';

type AddItemFormPropsType = {
  addItem: (title: string) => void;
};

const AddItemForm = React.memo(({ addItem }: AddItemFormPropsType) => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title.trim());
      setTitle('');
    } else {
      setErrorMessage('Title is required!');
    };
  };

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage !== null) {
      setErrorMessage(null);
    };

    setTitle(e.currentTarget.value);
  };

  const onPressEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addItemHandler();
    };
  };

  return (
    <div>
      <TextField
        value={title}
        id="outlined-error-helper-text"
        variant="outlined"
        label={"Type title"}
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
      >
        <Add style={{ margin: "-4px" }}/>
      </IconButton>
    </div>
  );
});

export default React.memo(AddItemForm);