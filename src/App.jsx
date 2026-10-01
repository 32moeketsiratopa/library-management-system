import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import BookManagement from "./pages/BookManagement.jsx";
import Transactions from "./pages/TransactionsPage.jsx";
import UserManagement from "./pages/UserManagement.jsx";

function App() {
  return (
  <Router>
    <div className="app-container">

      <nav className="navbar">
        <h1>Library Management System</h1>

        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/books">Books</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/users">Users</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<BookManagement />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/users" element={<UserManagement />} />
        </Routes>

        <footer className="footer">
           <p>Library Management System © 2026</p>
           <p>Built with React.js</p>
        </footer>

      </main>

    </div>
  </Router>
);
}

export default App;