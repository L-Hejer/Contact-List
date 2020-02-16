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

const ModalForm = ({
  modalIsOpen,
  closeModal,
  submitModal,
  addContact,

}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
          <h1>Add A Contact</h1>
          <label>Contact Name</label>
          <input type="text" name="Name" onChange={addContact}/>
          <label>Contact Phone Number</label>
          <input type="text" name="Phone" onChange={addContact}/>
          <label>Contact E-mail Adress</label>
          <input type="text" name="Email" onChange={addContact}/>
        </form>
        <button className="Modal-btn" onClick={submitModal}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ModalForm;
