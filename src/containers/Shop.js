import React from "react";
import Cart from "./Cart";
import Category from "./Category";
import ProductCard from "../components/ProductCard";
import AddToCart from "../components/AddToCart";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getProducts } from "../actions/productsActions";
import { addItemToCart } from "../actions/cartActions";

class Shop extends React.Component {
  state = {
    search: ""
  };

  changeHandler = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    const cards = this.props.products
      .filter(product => product.name.includes(this.state.search))
      .map(product => (
        <li key={product.id} className="ui card card-height">
          <ProductCard key={product.id} product={product} />
          {/*
          <button
            className="addtocart"
            onClick={() => {
              this.props.addItemToCart(product);
            }}
          >
            Add to Cart
          </button>
          <input
            className="addtocart right"
            type="number"
            name="quantity"
            min="1"
            max="99"
          />
          */}
          <AddToCart product={product} />
        </li>
      ));

    return (
      <div className="shop">
        <h1 className="center">Shop</h1>
        <input
          id="search"
          type="text"
          value={this.state.search}
          placeholder="search"
          onChange={this.changeHandler}
        />
        <ul className="ui four cards">
          {localStorage.getItem("token") !== null ? cards : null}
        </ul>
        <Switch>
          <Route
            exact
            path="/shop/:category"
            render={routerProps => (
              <Category products={this.props.products} {...routerProps} />
            )}
          />
        </Switch>
        {/*<Cart />*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state: ", state);
  return {
    user: state.user,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch(addItemToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
