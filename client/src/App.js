import React from "react";
import axios from "axios";
import ModalForm from "./Components/AddContact";
import ContactList from "./Components/ContactList";

import "./App.css";

class App extends React.Component {
  state = {
    modalIsOpen: false,
    editModalIsOpen: false,
    contacts: [],
    Name: "",
    Phone: "",
    Email: "",
    id:""
  };

  //Fetch Contact list from database
  componentDidMount = () => {
    axios
      .get("/contacts")
      .then(res => this.setState({ contacts: res.data }))
      .catch(error => {console.error(error); alert("Can not fetch contact list")});
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  openEditModal = () => {
    this.setState({ editModalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  closeEditModal = () => {
    this.setState({ editModalIsOpen: false });
  };

  addContact = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //Add a contact
  submitModal = e => {
    e.preventDefault();
    axios
      .post("/new_contact", {
        Name: this.state.Name,
        Phone: this.state.Phone,
        Email: this.state.Email
      })
      .then(() => {
        axios
          .get("/contacts")
          .then(res =>
            this.setState({
              contacts: res.data,
              modalIsOpen: false,
              Name: "",
              Phone: "",
              Email: ""
            })
          )
          .catch(error => {console.error(error); alert(error)});
      })
      .catch(error => {console.error(error); alert(error)});
  };

  //Edit Contact
  editContact = () => {
    axios.put(`/modify_contact/${this.state.id}`, {
        Name: this.state.Name,
        Phone: this.state.Phone,
        Email: this.state.Email
    })  
    .then(() => {
      axios
        .get("/contacts")
        .then(res =>
          this.setState({
            contacts: res.data,
            editModalIsOpen: false,
            Name: "",
            Phone: "",
            Email: ""
          })
        )
        .catch(error => {console.error(error); alert(error)});
    })
    .catch(error => {console.error(error); alert(error)});
  };

  //Delete Contact
  deleteContact = (idToRemove) => {
    axios.delete(`/delete_contact/${idToRemove}`)
    .then(() => {
      axios
        .get("/contacts")
        .then(res =>
          this.setState({
            contacts: res.data,
          })
        )
        .catch(error => {console.error(error); alert(error)});
    })
    .catch(error => {console.error(error); alert("Can not delete contact")});
  };

  render() {
    return (
      <div className="App">
        <header className="Nav-Menu">
          <h1>CONTACT LIST</h1>
          <button className="add-Btn" onClick={this.openModal}>
            Add Contact
          </button>
        </header>
        <div>
          <ModalForm
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            addContact={this.addContact}
            submitModal={this.submitModal}
          />
          <ContactList 
            contacts={this.state.contacts}
            deleteContact={this.deleteContact} 
            openEditModal={this.openEditModal} 
            closeEditModal={this.closeEditModal}
            editModalIsOpen={this.state.editModalIsOpen}
            editContact={this.editContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
