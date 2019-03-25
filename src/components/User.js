import React from "react";
import Cart from "../containers/Cart";
import { Link } from "react-router-dom";

const User = props => {
  let orders;
  if (props.user.orders) {
    orders = props.user.orders.map(order => {
      const link = "orders/" + order.id;
      return (
        <li key={order.id}>
          <Link to={link}>Order {order.id}</Link>
        </li>
      );
    });
  } else {
    orders = null;
  }
  return (
    <div className="user">
      <h1>Hi from User</h1>
      <p>{orders}</p>
      <Cart />
    </div>
  );
};

export default User;
