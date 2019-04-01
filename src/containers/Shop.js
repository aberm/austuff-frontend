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
        // <li key={product.id}>
        <div key={product.id} className="ui card product-card">
          <div>
            <ProductCard key={product.id} product={product} />
          </div>
          <div>
            <AddToCart product={product} />
          </div>
        </div>
        // </li>
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
        <br />
        <br />
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
