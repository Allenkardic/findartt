/** @format */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/userAction";
import TextField from "@material-ui/core/TextField";
import "../../css/Userform.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      country: "",
      gender: "",
      password: "",
      confirmPassword: "",
      error: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    const {
      errors: { errors }
    } = props;
    if (errors !== state.error) {
      return {
        error: errors
      };
      return null;
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, firstName, lastName, phone, country, password } = this.state;

    const newUser = {
      email,
      firstName,
      lastName,
      phone,
      country,
      password
    };

    // the logic of what the user input does
    this.props.signupUser(newUser, this.props.history);

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      phone,
      country,
      password,
      confirmPassword
    } = this.state;

    return (
      <div className="form-container">
        <form action="" onSubmit={this.handleSubmit}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="email"
            helperText={this.state.error}
            error={this.state.error}
            value={email}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="firstName"
            name="firstName"
            type="firstName"
            label="firstName"
            value={firstName}
            helperText={this.state.error}
            error={this.state.error}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="lastName"
            name="lastName"
            type="lastName"
            label="lastName"
            helperText={this.state.error}
            error={this.state.error}
            value={lastName}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="phone"
            name="phone"
            type="number"
            label="phone"
            helperText={this.state.error}
            error={this.state.error}
            value={phone}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="country"
            name="country"
            type="country"
            label="country"
            helperText={this.state.error}
            error={this.state.error}
            value={country}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="password"
            name="password"
            type="password"
            label="password"
            helperText={this.state.error}
            error={this.state.error}
            value={password}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="confirmPassword"
            helperText={this.state.error}
            error={this.state.error}
            value={confirmPassword}
            onChange={this.handleChange}
            fullWidth
            required
          />
          <button className="btn-default">Sign Up</button>
        </form>
        <div>
          already have an account sign in here{" "}
          <Link to="/">
            <button className="btn"> signin</button>
          </Link>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
  errors: state.user
});
export default connect(mapStateToprops, { signupUser })(Signup);
