import React from "react";

import { Route } from "react-router-dom";
import { Routes, BrowserRouter } from "react-router-dom";

import browserRoute from "../constants/path";
import SignIn from "../screens/authentication/sign-in";
import TodoList from "../screens/todo-list";
import AddMovie from "../screens/add-movie";
import ShowMovie from "../screens/show-movie";
import UpdateMovie from "../screens/add-movie/update-movie";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={browserRoute.SIGN_IN} element={<SignIn />} />
        <Route exact path={browserRoute.TODO_LIST} element={<TodoList />} />
        <Route exact path={browserRoute.ADD_MOVIE} element={<AddMovie />} />
        <Route exact path={browserRoute.SHOW_MOVIE} element={<ShowMovie />} />
        <Route
          exact
          path={browserRoute.UPDATE_MOVIE}
          element={<UpdateMovie />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
