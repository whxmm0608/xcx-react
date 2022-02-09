import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link, NavLink } from "react-router-dom";

// NavLink是Link的一个特定版本

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
          <NavLink to="/person">Person</NavLink>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
