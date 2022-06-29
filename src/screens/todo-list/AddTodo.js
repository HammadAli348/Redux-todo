import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/actions";

import SharedInput from "./SharedInput";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <SharedInput data={task} setData={setTask} addHandler={addItemHandler} />
  );
};

export default React.memo(AddTodo);
