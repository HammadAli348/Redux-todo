import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, Layout } from "antd";

import AddTodo from "./AddTodo";
import ShowTodoList from "./ShowTodoList";
import FilterOptions from "./FilterOptions";

import "./todo.css";

const TodoList = () => {
  const [responseData, setResponseData] = useState([]);
  const todoItems = useSelector((state) => state?.TodoLists?.todos);

  useEffect(() => {
    setResponseData(todoItems);
  }, [todoItems]);

  const { Content } = Layout;

  const nevigate = useNavigate();

  const viewAll = () => {
    setResponseData(todoItems);
  };

  const viewComplete = () => {
    const getUnCompleteTOdo = todoItems.filter((res) => res.complete);
    setResponseData(getUnCompleteTOdo);
  };

  const viewActive = () => {
    const getUnCompleteTOdo = todoItems.filter((res) => !res.complete);
    setResponseData(getUnCompleteTOdo);
  };

  const signOut = () => {
    nevigate("/");
  };

  return (
    <Content className="todo__container">
      <div className="todo__header">
        <p>Todo React Redux</p>
        <p onClick={signOut}>sign out</p>
      </div>

      <Card className="todo__container--card">
        <AddTodo />

        <FilterOptions
          viewActive={viewActive}
          viewComplete={viewComplete}
          viewAll={viewAll}
        />

        <ul className="todo__container--ul">
          {responseData?.map((res) => {
            return (
              <div key={res.id}>
                <ShowTodoList
                  id={res.id}
                  task={res.task}
                  complete={res.complete}
                  res={res}
                />
              </div>
            );
          })}
        </ul>
      </Card>
    </Content>
  );
};

export default TodoList;
