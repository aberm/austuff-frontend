import React from 'react';

const Order = ({orders, routerProps}) => {

  let order = {id: "loading"};
  let items = null;

  if (orders) {
    order = orders.find(order => order.id === parseInt(routerProps.match.params.id));
    if (order === undefined) {
      order = {id: "You do not have access to this Page."}
    } else {
      console.log("items: ", order.order_items)
      items = order.order_items.map(item => <li key={item.id}>{item.product.name}</li>)
    }
  }

  return (
    <div className="order">
      <h1>Hi from Order</h1>
      <h3>{order.id}</h3>
      <ul>{items}</ul>
    </div>
  )
}

export default Order;
