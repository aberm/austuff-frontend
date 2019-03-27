import React from "react";
import { removeItemFromCart } from "../actions/cartActions";
import { createOrLoadLastOrder } from "../actions/orderActions";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  componentDidMount() {}

  render() {
    const itemList = this.props.cartItems.map(item => (
      <li key={item.id} className="ui card">
        <ProductCard
          key={item.id}
          product={item.product}
          quantity={item.quantity}
        />
        <button onClick={() => this.props.removeItemFromCart(item)}>
          Remove from Cart
        </button>
      </li>
    ));
    const price = this.props.cartItems.reduce(
      (total, i) => total + i.product.price * i.quantity,
      0
    );

    return (
      <div className="cart">
        <h1>&nbsp;Cart</h1>
        <div className="cartlist">
          {localStorage.getItem("token") !== null ? (
            <>
              {this.props.cartItems.length ? (
                <div className="cartlist-count">
                  <div className="ui button">
                    <Link to="/checkout">Checkout</Link>
                  </div>
                  <h2>Cart Count: {this.props.cartItems.length}</h2>
                  <h2>
                    Cart Total: $
                    {price.toString().slice(0, -2) +
                      "." +
                      price.toString().slice(-2)}
                  </h2>
                  <ul className="ui two cards"> {itemList} </ul>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("cart state: ", state.cartItems);
  return {
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
