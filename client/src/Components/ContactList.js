import React from "react";

import ContactCard from "./ContactCard";


const ContactList = ({ contacts = [], deleteContact,openEditModal,editModalIsOpen,closeEditModal, editContact }) => {
  return (
    <div className="Contact-List">
      {contacts.map((element, i) => (
        <ContactCard key={i} contact={element} deleteContact={deleteContact} openEditModal={openEditModal} 
        editModalIsOpen={editModalIsOpen} closeEditModal={closeEditModal} editContact={editContact}/>
      ))}
    </div>
  );
};
export default ContactList;