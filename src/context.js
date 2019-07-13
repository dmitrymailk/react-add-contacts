import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload)
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Name 1",
        email: "email1@mail.com",
        phone: "123-123-123"
      },
      {
        id: 2,
        name: "Name 2",
        email: "email2@mail.com",
        phone: "123-123-123"
      },
      {
        id: 3,
        name: "Name 3",
        email: "email3@mail.com",
        phone: "123-123-123"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      // value is property which allows to access from "state"
      // in other components we can use only name "value" to access
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;
export default Consumer;
