import React from "react";
import Shop from "./Shop";
import Checkout from "./Checkout";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Product from "../components/Product";
import Order from "../components/Order";
import User from "../components/User";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getProducts } from "../actions/productsActions";
import { getUserData } from "../actions/userActions";
import { createOrLoadLastOrder } from "../actions/orderActions";

class Main extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      // if logged in -- make this better
      this.props.getProducts();
      this.props.getUserData();
      // Better yet - redirect to login
    }
  }

  render() {
    return (
      <div className="main">
        <h1>Hello from Main</h1>
        <React.Fragment>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/products/:id"
              render={routerProps => (
                <Product
                  product={this.props.products}
                  routerProps={routerProps}
                />
              )}
            />
            <Route
              exact
              path="/orders/:id"
              render={routerProps => (
                <Order
                  orders={this.props.user.orders}
                  routerProps={routerProps}
                />
              )}
            />
            <Route
              exact
              path="/user"
              render={routerProps => (
                <User user={this.props.user} routerProps={routerProps} />
              )}
            />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("MAIN state: ", state);
  return {
    products: state.products,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    getUserData: () => dispatch(getUserData()),
    createOrLoadLastOrder: () => dispatch(createOrLoadLastOrder())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
// export default Main;
