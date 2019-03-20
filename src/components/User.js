import React from 'react';
import Cart from "../containers/Cart";
import { connect } from 'react-redux';
import { getUserData } from "../actions/userActions";

class User extends React.Component {

  componentDidMount(){
    
  }

  render(){
    // const orders = this.props.user.orders.map(order => <li key={order.id}>{order.id}</li>)
    return (
      <div className="product">
        <h1>Hi from User</h1>
        {/* <p>{orders}</p> */}
        <Cart />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(getUserData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
