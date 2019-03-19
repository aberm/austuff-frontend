import React from 'react';
import Shop from "./Shop";
import Checkout from "./Checkout";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Product from "../components/Product";
import Order from "../components/Order";
import User from "../components/User";
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getProducts } from "../actions/productsActions";
import { getUserData } from "../actions/userActions";
import { createOrLoadLastOrder } from '../actions/orderActions';

class Main extends React.Component {

  componentDidMount(){
    this.props.getProducts();
    this.props.getUserData();
    if (localStorage.getItem("token") !== null){ // if logged in -- make this better
      // Better yet - redirect to login
      this.props.createOrLoadLastOrder()
    }
  }

  render(){
    return (
      <div className="main">
        <h1>Hello from Main</h1>
        <React.Fragment>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/products/:id" render={(routerProps) => <Product product={this.props.products} routerProps={routerProps}/>} />
            <Route exact path="/orders/:id" component={Order} />
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("MAIN state: ", state)
  return {
    products: state.products,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    getUserData: () => dispatch(getUserData()),
    createOrLoadLastOrder: () => dispatch(createOrLoadLastOrder()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// export default Main;