import React from "react";

const Order = ({ orders, routerProps }) => {
  let order = { id: "loading" };
  let items = null;
  let options = [];

  if (orders) {
    order = orders.find(
      order => order.id === parseInt(routerProps.match.params.id)
    );
    if (order === undefined) {
      order = { id: "You do not have access to this Page." };
    } else {
      console.log("items: ", order.order_items);
      items = order.order_items.map(item => (
        <li key={item.id}>
          {item.product.name} {item.quantity > 1 && ` x ${item.quantity}`}
        </li>
      ));
    }
  }

  return (
    <div className="order">
      <h1>Order #{order.id}</h1>
      <ul>{items}</ul>
      {order.total_price && (
        <h3>
          Total price: $
          {order.total_price.toString().slice(0, -2) +
            "." +
            order.total_price.toString().slice(-2)}
        </h3>
      )}
    </div>
  );
};

export default Order;
