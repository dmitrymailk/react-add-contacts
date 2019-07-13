import React, { Component } from "react";
import PropTypes from "prop-types";
import Consumer from "../../context";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false
    };
  }
  onShowClick = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    let { name, email, phone, id } = this.props.contacts;
    let { showInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contacts: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
