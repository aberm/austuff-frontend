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
      <div>
        <button
          className="addtocart"
          onClick={() => {
            this.props.addItemToCart(this.props.product, this.state.quantity);
          }}
        >
          Add to Cart
        </button>
        <input
          className="addtocart right"
          type="number"
          name="quantity"
          placeholder="1"
          min="1"
          max="99"
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
