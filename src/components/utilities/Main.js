import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
import Artwork from "../arttwork/Artwork";
import Signin from "../forms/Signin";
import Signup from "../forms/Signup";
import Homes from "../pages/Homes";
import Arttworkbids from "../pages/Arttworkbids";
import Logout from "../forms/Logout";
import Myprofile from "../utilities/Myprofile";
import axios from "axios";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: !!localStorage.getItem("token") || null,
      token: null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const userToken = (axios.defaults.headers.common["Authorization"] = token);
    console.log(token);
    if (token) {
      this.setState({
        auth: true,
        token: userToken
      });
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      this.setState({ auth: false });
    }
  }
  render() {
    const { auth, token } = this.state;
    const { authenticated } = this.props;

    console.log("hello", { auth, authenticated, token });
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute
              exact
              path="/home"
              authenticated={auth || authenticated}
              component={Homes}
            />
            <PrivateRoute
              exact
              path="/user/artwork"
              authenticated={auth || authenticated}
              component={Artwork}
            />
            <PrivateRoute
              exact
              path="/user/profile"
              authenticated={auth || authenticated}
              component={Myprofile}
            />
            <PrivateRoute
              exact
              path="/logout"
              authenticated={auth || authenticated}
              component={Logout}
            />
            <PrivateRoute
              exact
              path="/arttworkbid/:id"
              authenticated={auth || authenticated}
              component={Arttworkbids}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  // console.log("msptt ", state);
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps, null)(Main);
