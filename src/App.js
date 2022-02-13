import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// NavLink是Link的一个特定版本
// import { Outlet, Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/header.jsx"; //jsx不再支持小写组件名
import MyNavLink from "./components/nav";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Header a={1} />
      <div style={{ marginBottom: "20px" }}>
        {/* 反斜杠 */}
        <MyNavLink to="/invoices">Invoices</MyNavLink>
        <MyNavLink to="/expenses">Expenses</MyNavLink>
        <MyNavLink to="/user">user</MyNavLink>

        {/* 向路由组件传递了params参数3211，searcch参数?name=方晟&age=1&hobby=吃奶。*/}
        {/* state传参不会体现在url上，他传递的参数是隐式的。注意不要和组件的state搞混了，这个是路由组件特有的 */}
        {/* params和search参数需要声明接收,state参数不需要声明接收 */}
        <MyNavLink
          to="/count/3211?name=方晟&age=1&hobby=吃奶"
          state={{ a: 2222, message: "我是向count传递的state参数" }}
        >
          我是count组件
        </MyNavLink>
        <MyNavLink to="/person">Person</MyNavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
