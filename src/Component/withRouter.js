import React from "react";
import { withRouter } from "react-router-dom";

class Cart extends React.Component {
  handleClick = () => {
    this.props.history.push("/billpage", { data: "reference from Cart" });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Add to cart</button>
      </>
    );
  }
}
export default withRouter(Cart);
