import React from "react";

import { Route } from "react-router-dom";
import { Routes, BrowserRouter } from "react-router-dom";

import browserRoute from "../constants/path";
import SignIn from "../screens/authentication/sign-in";
import TodoList from "../screens/todo-list";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={browserRoute.SIGN_IN} element={<SignIn />} />
        <Route exact path={browserRoute.TODO_LIST} element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
