import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../actions/cartActions";

class AddToCart extends React.Component {
  state = {
    quantity: 1
  };

  changeHandler = event => {
    this.setState({
      quantity: event.target.value
    });
  };

  render() {
    return (
      <div className="addtocart">
        <button
          className="addtocart-button"
          onClick={() => {
            this.props.addItemToCart(this.props.product, this.state.quantity);
            this.setState({
              quantity: 1
            });
          }}
        >
          Add to Cart
        </button>
        <input
          className="addtocart-button right"
          type="number"
          name="quantity"
          min="1"
          max="99"
          value={this.state.quantity}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (product, quantity) =>
      dispatch(addItemToCart(product, quantity))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddToCart);
