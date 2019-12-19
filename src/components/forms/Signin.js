/** @format */
import { Link } from "react-router-dom";
import React, { Component } from "react";
import "../../css/Userform.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signinUser } from "../../redux/actions/userAction";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      errors: { errors }
    } = props;
    if (errors !== state.error) {
      return {
        error: errors
      };
    } else {
      return { error: null };
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const existingUser = {
      email,
      password
    };

    // the logic of what the user input does
    this.props.signinUser(existingUser, this.props.history);

    this.setState({
      email: "",
      password: ""
    });

    // re-direct user to the home page if credentials are correct
  };

  render() {
    const { email, password } = this.state;
    console.log("loading", this.props);
    return (
      <div className="form-container">
        ;
        <div>
          {this.state.error ? <h1>invalid username or password</h1> : null}
        </div>
        <form action="" onSubmit={this.handleSubmit}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="email"
            helperText={this.state.error}
            // error={this.state.error}
            value={email}
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
            // error={this.state.error}
            value={password}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <button className="btn-default">
            Login
            {this.props.loading.ui_loading && (
              <LinearProgress style={{ zindex: "5" }} variant="query" />
            )}
          </button>
        </form>
        <div>
          Don't have an account signup here{" "}
          <Link to="/signup">
            <button className="btn"> signup</button>
          </Link>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  errors: state.user,
  loading: state.user,
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps, { signinUser })(Signin);
