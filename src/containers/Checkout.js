import React from 'react';
import Cart from "./Cart";
import { connect } from 'react-redux';
import { placeOrder } from "../actions/orderActions"

class Checkout extends React.Component {
  render(){
    return (
      <div className="checkout">
        <h1>Hello from Checkout</h1>
        <Cart />
        { this.props.cartItems.length ?
          <button onClick={() => this.props.placeOrder()}>Place Order</button>
          : null
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    placeOrder: () => dispatch(placeOrder())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
