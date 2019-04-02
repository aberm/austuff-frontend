import React from "react";
import Cart from "../containers/Cart";
import { Link } from "react-router-dom";

const User = props => {
  let orders;
  let options = [];
  let options2 = [];

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
    props.user.orders.forEach(order =>
      order.order_items.forEach(item => {
        if (!options.includes(item.product.name)) {
          options.push(`${item.product.name}`);
        } else {
          return;
        }
      })
    );
    options2 = options.map(thing => <option value={thing}>{thing}</option>);
  } else {
    orders = null;
  }
  return (
    <div className="user">
      <h1>{props.user.username}'s Page</h1>
      <p>{props.user.points} points</p>
      <ul>{orders}</ul>

      <div className="review">
        <h5>Add a review</h5>
        <form
          className="review-input"
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <select>{options2}</select>
          <br />
          <textarea rows="4" />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default User;
