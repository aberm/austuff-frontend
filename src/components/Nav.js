import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="nav">
      <h1>Hi from Nav</h1>
      <NavLink to="/shop">Shop</NavLink><br />
      <NavLink to="/checkout">Checkout</NavLink><br />
      <NavLink to="/signup">Signup</NavLink><br /><br />
    </div>
  )
}

export default Nav;
