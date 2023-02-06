import React, { useState, useEffect } from "react";
import Contacts from "./components/ContactsTable";
import AddContactBtn from "./components/AddContactBtn";
import AddContactModal from "./components/AddContactModal";

const ContactsApp = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const dataWithKeys = data.map((item)=>{ 
          item.key = item.id;
          return item;
        });
        setUsers(dataWithKeys);
      })
      .catch(() => setUsers([]));
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteContact = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const addContact = (newContact = {}) => {
    setUsers([...users, newContact]);
  };

  const newContactId = users.length > 0 ? users[users.length - 1].id + 1 : null;

  return (
    <div className="contacts-app">
      <Contacts dataSource={users} deleteContact={deleteContact} />
      <AddContactBtn handleClick={toggleModal} />
      <AddContactModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        addContact={addContact}
        newContactId={newContactId}
      />
    </div>
  );
};

export default ContactsApp;
