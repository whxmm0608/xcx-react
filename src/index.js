import React, { lazy, Suspense } from "react";
// Suspense组件的作用：指定一个组件（备注：该组件不能是懒加载的）防止路由在懒加载的时候由于网速较慢时，导致页面空白
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Person from "./routes/person";
// import User from "./routes/user";
import Count from "./routes/count";
import Message from "./routes/message";
import ToSum from "./routes/to-sum";
import Provide from "./routes/provide";
import axios from "axios";
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//React路由懒加载示例
const User1 = lazy(() => import("./routes/user"));

React.Component.prototype.$axios = axios;
const rootElement = document.getElementById("root");

// 注册路由
render(
  <BrowserRouter>
    {/* Routes类似React Router V5的Switch */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices a={1} />} />
        <Route path="Person" element={<Person />} />
        <Route path="Provide" element={<Provide />} />
        <Route
          path="User"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <User1 />
            </Suspense>
          }
        />
        <Route path="Message/:province/:city/:from-:to" element={<Message />} />
        <Route path="Count">
          {/* //url传参 */}
          <Route path=":id" element={<Count />} />
          <Route path="me" element={<Count />} />
        </Route>
        <Route path="ToSum" element={<ToSum />} />
      </Route>
      {/* v6版本重定向方案 https://segmentfault.com/a/1190000040956450 */}
      <Route path="*" element={<Navigate to="/invoices" />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
