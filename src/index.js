import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Person from "./routes/person";
import User from "./routes/user";
import Count from "./routes/count";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

React.Component.prototype.$axios = axios;
const rootElement = document.getElementById("root");

// 注册路由
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="Person" element={<Person />} />
        <Route path="User" element={<User />} />
        <Route path="Count">
          {/* //url传参 */}
          <Route path=":id" element={<Count />} /> 
          <Route path="me" element={<Count />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
