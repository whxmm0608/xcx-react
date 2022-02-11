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
        <MyNavLink to="/count/3211" state={{ a: 1 }}>
          count
        </MyNavLink>
        <MyNavLink to="/person">Person</MyNavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
