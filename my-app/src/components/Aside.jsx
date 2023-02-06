import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside>
      <ul className="left-menu">
        <li className="left-menu__item">
          <Link to="/">36. Icon Counters app</Link>
        </li>
        <li className="left-menu__item">
          <Link to="/todolist">37. ToDo List app</Link>
        </li>
        <li className="left-menu__item">
          <Link to="/contacts">38. Contacts</Link>
        </li>
        <li className="left-menu__item">
          <Link to="/userlist">39. User List</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
