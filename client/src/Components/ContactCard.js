import React from "react";
import EditForm from "./EditContact";

const ContactCard = props => {
  const { contact = {}, deleteContact = () => {}, openEditModal, editModalIsOpen, closeEditModal, editContact } = props;
  const { Name = "", Phone = "", Email = "" } = contact;


  return (
    <div>
      <div className="Conatct-Card">
        <h1 className="Contact-Name">Name: {Name}</h1>
        <h4 className="Contact-Informations">Phone Number: {Phone}</h4>
        <h4 className="Contact-Informations">E-mail: {Email}</h4>
        <div className="btn-container">
          <button className="card_btn" onClick={openEditModal}>EDIT</button>
          <EditForm editModalIsOpen={editModalIsOpen} closeEditModal={closeEditModal} editContact={editContact}/>
          <button className="card_btn" onClick={() => deleteContact(contact._id)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
