import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import "../../css/Home.css";
import CircularProgress from "@material-ui/core/CircularProgress";
class Homenav extends Component {
  componentDidMount() {
    console.log("hello");
  }

  render() {
    const { images } = this.props;
    return (
      <div>
        <div className="home-nav">
          <div>hello</div>
          <div>jjjj</div>
          <div></div>
        </div>
        <div className="get-art">{images}</div>
        <CircularProgress disableShrink />
      </div>
    );
  }
}
