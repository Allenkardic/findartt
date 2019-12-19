import React, { Component } from "react";
import { connect } from "react-redux";
import { getArttwork } from "../../redux/actions/arttworkAction";
import "../../css/Home.css";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";

class Arttworkbids extends Component {
  constructor() {
    super();
    this.state = { makeBid: "" };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getArttwork(id);
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  // componentDidMount() {
  //   this.setState({ loading: false });
  // }
  static getDerivedStateFromProps(state, props) {
    console.log("get derived", props);
    console.log("here is state", state);
  }

  render() {
    const { imageUrl } = this.props.recentArttwork;

    return !this.props.recentArttwork.currentBid ? (
      <LinearProgress style={{ marginTop: "20%" }} variant="query" />
    ) : (
      <div>
        <img className="home-url-art" src={imageUrl} alt="art work" />
        <div>Date created: {this.props.recentArttwork.createdDate}</div>
        <div className="bid-container">
          <div>{this.props.recentArttwork.description}</div>
          <div className="minimum-bid">
            Minimum bid:{" "}
            <span style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
              &#8358;{" "}
            </span>
            {this.props.recentArttwork.minimumAmount}
          </div>

          {this.props.recentArttwork.bids.map(bid => (
            <div className="bid-amount">
              <div className="bid-amount-item">
                <span>&#8358;</span> {bid.amount}
              </div>
              <div className="bid-amount-item">.{bid.updatedDate}</div>
            </div>
          ))}

          <form action="" onSubmit={this.handleSubmit}>
            <TextField
              id="bid"
              name="bid"
              type="number"
              label="Your bid amount"
              // helperText={this.state.error}
              // error={this.state.error}
              // value={emai}
              onChange={this.handleChange}
              fullWidth
              required
            />

            <button className="btn-default">
              Make a Bid
              {/* {this.props.loading.ui_loading && (
              <LinearProgress style={{ zindex: "5" }} variant="query" />
            )} */}
            </button>
          </form>
        </div>
      </div>
    );

    // const { amount } = this.props.recentArttworkcurrentBid;
  }
}
const mapStateToProps = state => ({
  // console.log("what is inside artwork", state);

  recentArttwork: state.arttwork.recentArttwork
});
export default connect(mapStateToProps, { getArttwork })(Arttworkbids);
