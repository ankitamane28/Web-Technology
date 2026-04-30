import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newList = contacts.filter((_, i) => i !== index);
    setContacts(newList);
  };

  const updateContact = (index, updatedContact) => {
    const newList = [...contacts];
    newList[index] = updatedContact;
    setContacts(newList);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              deleteContact={deleteContact}
              updateContact={updateContact}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContact addContact={addContact} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;