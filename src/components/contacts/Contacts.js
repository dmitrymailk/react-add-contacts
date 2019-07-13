import React, { Component } from "react";
import Contact from "./Contact";
import Consumer from "../../context";
import { Link } from "react-router-dom";

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(item => item.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4">Contact List</h1>
              {contacts.map(item => {
                return (
                  <Contact
                    key={item.id}
                    contacts={item}
                    deleteClickHandler={this.deleteContact.bind(this, item.id)}
                  />
                );
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
