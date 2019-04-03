import React from "react";
import { Link } from "react-router-dom";

const ProductCard = props => {
  return (
    <div className="product-info">
      <Link to={`/products/${props.product.id}`}>
        <img
          alt={props.product.name}
          src={props.product.img}
          style={{ width: "100%" }}
        />
      </Link>
      <h3>
        {props.product.name}
        {props.quantity > 1 && ` x ${props.quantity}`}
        <p>Price: ${(props.product.price * (props.quantity || 1)) / 100}</p>
      </h3>
    </div>
  );
};

export default ProductCard;
