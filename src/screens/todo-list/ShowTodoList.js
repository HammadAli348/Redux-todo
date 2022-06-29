import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input } from "antd";
import { editTodo, removeTodo, completeTodo } from "../../redux/actions";
import SharedInput from "./SharedInput";

const ShowTodoList = ({ task, complete, id, res }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    dispatch(editTodo({ id, editTask }));
    setIsEdit(false);
  }, [id, editTask]);

  const handleDelete = useCallback(() => {
    dispatch(removeTodo(id));
  }, [id]);

  const handleComplete = useCallback(() => {
    dispatch(completeTodo(res));
  }, [res]);

  return (
    <div className={complete ? "complete__todo" : "todo__list"}>
      {isEdit ? (
        <SharedInput
          data={editTask}
          setData={setEditTask}
          addHandler={handleEdit}
          editInput
        />
      ) : (
        <>
          <li className="Todo-task">
            <Checkbox onClick={handleComplete} /> {task}
          </li>
          <div className="todo-buttons">
            <Button onClick={() => setIsEdit(true)}>
              <EditOutlined />
            </Button>
            <Button onClick={handleDelete}>
              <DeleteOutlined />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(ShowTodoList);
