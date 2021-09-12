import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  const contactList = [
    {"name": "imz11", "email": "11"}, {"name": "imz22", "email": "11"}, {"name": "imz33", "email": "11"}
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contactList}/>
    </div>
  );
}

export default App;
