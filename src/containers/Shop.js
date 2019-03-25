import React from "react";
import Cart from "./Cart";
import Category from "./Category";
import ProductCard from "../components/ProductCard";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getProducts } from "../actions/productsActions";
import { addItemToCart } from "../actions/cartActions";

class Shop extends React.Component {
  componentDidMount() {}

  render() {
    const links = this.props.products.map(product => (
      <NavLink key={product.id} to={`/shop/${product.category}`}>
        {product.category}
      </NavLink>
    ));

    const cards = this.props.products.map(product => (
      <li key={product.id} className="ui card">
        <ProductCard key={product.id} product={product} />
        <button
          onClick={() => {
            this.props.addItemToCart(product);
          }}
        >
          Add to Cart
        </button>
      </li>
    ));

    return (
      <div className="shop">
        <h1 className="center">Shop</h1>
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
