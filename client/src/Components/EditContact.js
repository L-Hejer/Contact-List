import React from "react";
import Modal from "react-modal";
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    textAlign: "center"
  }
};

const EditForm = ({
  editModalIsOpen,
  closeEditModal,
  editContact
  

}) => {
  return (
    <div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        style={customStyles}
      >
        <form>
          <h1>Edit A Contact</h1>
          <label>Contact Name</label>
          <input type="text" name="Name"/>
          <label>Contact Phone Number</label>
          <input type="text" name="Phone"/>
          <label>Contact E-mail Adress</label>
          <input type="text" name="Email"/>
        </form>
        <button className="Modal-btn" onClick={editContact}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeEditModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default EditForm;