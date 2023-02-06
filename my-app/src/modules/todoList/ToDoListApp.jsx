import React, { useState, useRef } from "react";
import ToDoItem from "./ToDoItem";
import { Button } from "antd";

const ToDoListApp = () => {
  const [itemsList, setItemList] = useState([
    {
      id: 1673202358428,
      text: "Feed a dog",
      status: false,
    },
    {
      id: 1673202372959,
      text: "Clean a room",
      status: false,
    },
    {
      id: 1673202389998,
      text: "Eat a sandwitch",
      status: false,
    },
  ]);

  const inputRef = useRef(null);

  const toggleItemStatus = (item) => {
    setItemList((itemsList) => {
      const updatedItemsList = [...itemsList];
      const index = updatedItemsList.indexOf(item);

      updatedItemsList[index].status = !updatedItemsList[index].status;

      return updatedItemsList;
    });
  };

  const addNewItem = () => {
    const itemText = inputRef.current.value;
    if (itemText.length > 0) {
      const newItem = {
        id: Date.now(),
        text: itemText,
        status: false,
      };

      setItemList((itemsList) => {
        const updatedItemsList = [...itemsList, newItem];

        return updatedItemsList;
      });

      inputRef.current.value = "";
    }
  };

  const deleteItem = (e, id) => {
    e.stopPropagation();

    const updatedItemsList = itemsList.filter((item) => item.id !== id);
    setItemList(updatedItemsList);
  };

  return (
    <div className="todo-list-app">
      <input ref={inputRef}></input>
      <Button onClick={addNewItem}>Add new task</Button>
      <ul>
        {itemsList.length > 0 &&
          itemsList.map((item) => {
            return (
              <ToDoItem
                deleteItem={(e) => {
                  deleteItem(e, item.id);
                }}
                key={item.id}
                text={item.text}
                status={item.status}
                handleStatus={() => {
                  toggleItemStatus(item);
                }}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ToDoListApp;
