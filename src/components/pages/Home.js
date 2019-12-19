import React, { Component } from "react";
import "../../css/Home.css";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    console.log("home", this.props.arttworks);
    const { id, imageUrl, name, description } = this.props.arttworks;
    return (
      <div className="container-home-url">
        <div>
          <Link to={`/arttworkbid/${id}`}>
            <img className="home-url" src={imageUrl} alt="art work" />
          </Link>
        </div>
        <div className="home-description">Art work name: {name}</div>
        <div className="home-description">Discription: {description}</div>
      </div>
    );
  }
}
export default Home;
