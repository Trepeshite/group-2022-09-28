import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import IconCounterApp from "./modules/iconCounter/IconCounterApp";
import ToDoListApp from "./modules/todoList/ToDoListApp";
import Header from "./components/Header";
import Aside from "./components/Aside";
import ContactsApp from "./modules/contacts/ContactsApp";
import UsersListApp from "./modules/usersList/UsersListApp";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Aside />
        <Routes>
          <Route path="/" element={<IconCounterApp />} />
          <Route path="/todolist" element={<ToDoListApp />} />
          <Route path="/contacts" element={<ContactsApp />} />
          <Route path="/userlist" element={<UsersListApp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
