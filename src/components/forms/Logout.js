import React, { Component } from "react";
import { logout } from "../../redux/actions/userAction";
import { connect } from "react-redux";

class Logout extends Component {
  signOutUser = () => {
    this.props.logout(this.props.history);
  };
  render() {
    return (
      <div>
        <button style={{ float: "right" }} onClick={this.signOutUser}>
          logout
        </button>
      </div>
    );
  }
}
export default connect(null, { logout })(Logout);
