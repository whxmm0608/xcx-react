import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link, NavLink } from "react-router-dom";

// NavLink是Link的一个特定版本

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>

          {/* 反斜杠 */}
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>|{" "}
          <Link to="/user">user</Link>|{" "}
          <NavLink to="/person">Person</NavLink>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
