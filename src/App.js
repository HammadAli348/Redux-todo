import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import PublicRoutes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PublicRoutes />
    </Provider>
  );
}

export default App;
