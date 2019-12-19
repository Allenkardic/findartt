import React, { Component } from "react";
import Profile from "../utilities/Profile";
import { Link } from "react-router-dom";
import "../../css/Navbar.css";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showContent: false
    };
  }
  onToggleShow = () => {
    this.setState({ showContent: !this.state.showContent });
  };
  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="siderbar-item">
            {this.state.showContent ? (
              <ul className="sidebar-item-content">
                <Profile />
                <Link to="/home">
                  <li>Home</li>
                </Link>
                <Link to="/user/artwork">
                  <li>Artwork</li>
                </Link>
                <Link to="/user/profile">
                  <li>My profile</li>
                </Link>
                <Link to="/user/setting">
                  <li>Settings</li>
                </Link>
                <Link to="/logout">
                  <li>Logout</li>
                </Link>
              </ul>
            ) : null}
          </div>
          <div className="siderbar-item">
            <i
              className=""
              onClick={this.onToggleShow}
              class="fas fa-bars bar"
            />
          </div>
        </div>
      </div>
    );
  }
}
