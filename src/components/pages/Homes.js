import React, { Component } from "react";
import Home from "./Home";
import { getArttworks } from "../../redux/actions/arttworkAction";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

class Homes extends Component {
  componentDidMount() {
    this.props.getArttworks();
    console.log("hello", this.props);
  }

  render() {
    console.log("that", this.props);
    const { arttworks } = this.props;
    console.log("ui_loading", this.props);
    return (
      <div>
        {arttworks.map(image => (
          <Home Key={image.id} arttworks={image} />
        ))}

        <LinearProgress
          style={{ marginTop: "20%", marginLeft: "20%", marginRight: "20%" }}
          variant="query"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  arttworks: state.arttwork.arttworks
});
export default connect(mapStateToProps, { getArttworks })(Homes);
