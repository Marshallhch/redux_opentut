import React, { Component } from "react";

export default class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href='create'
            onClick={function (e) {
              this.props.onClick("CREATE");
              e.preventDefault();
            }.bind(this)}>
            CREATE
          </a>
        </li>
        <li>
          <a
            href='update'
            onClick={function (e) {
              this.props.onClick("UPDATE");
              e.preventDefault();
            }.bind(this)}>
            UPDATE
          </a>
        </li>
        <li>
          <input
            type='button'
            value='DELETE'
            onClick={function (e) {
              this.props.onClick("DELETE_PROCESS");
              e.preventDefault();
            }.bind(this)}
          />
        </li>
      </ul>
    );
  }
}
