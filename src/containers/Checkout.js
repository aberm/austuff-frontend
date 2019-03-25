import React from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import { Redirect } from "react-router-dom";

class Checkout extends React.Component {
  state = {
    placed: false,
    link: "/orders/" + this.props.order.id
  };

  placeOrder = () => {
    this.props.placeOrder();

    // reload getUserData()

    this.setState({
      placed: true
    });
    // <Redirect to={link} />
  };

  render() {
    return (
      <div className="checkout">
        <h1>Hello from Checkout</h1>
        {/* <Cart /> */}
        {this.props.cartItems.length ? (
          <button onClick={this.placeOrder}>Place Order</button>
        ) : (
          <Redirect to="/shop" />
        )}
        {this.state.placed && <Redirect to={this.state.link} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
    order: state.order
  };
};
const mapDispatchToProps = dispatch => {
  return {
    placeOrder: () => dispatch(placeOrder())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
