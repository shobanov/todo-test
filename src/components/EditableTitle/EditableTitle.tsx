import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';

export type EditableTitlePropsType = {
  title: string;
  onChange: (newValue: string) => void;
};

const EditableTitle = (props: EditableTitlePropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  
  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.title);
  };

  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);

  if (editMode) {
    return <TextField value={title} onChange={onChangeTitle} onBlur={activateViewMode} autoFocus/>
  };

  return <span onDoubleClick={activateEditMode}>{props.title}</span>
};

export default React.memo(EditableTitle);