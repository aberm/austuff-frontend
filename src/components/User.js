import React from "react";
import Cart from "../containers/Cart";
import { Link } from "react-router-dom";

const User = props => {
  let orders;
  if (props.user.orders) {
    orders = props.user.orders.map(order => {
      if (order.completed === true) {
        const link = "orders/" + order.id;
        return (
          <li key={order.id}>
            <Link to={link}>Order {order.id}</Link>
          </li>
        );
      }
    });
  } else {
    orders = null;
  }
  return (
    <div className="user">
      <h1>{props.user.username}'s Page</h1>
      <p>{props.user.points} points</p>
      <ul>{orders}</ul>
      {/*<Cart />*/}
    </div>
  );
};

export default User;
