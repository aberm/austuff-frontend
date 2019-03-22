import React from "react";
import { Link } from "react-router-dom";

const ProductCard = props => {
  return (
    <div className="product-card">
      <Link to={`/products/${props.product.id}`}>
        <img
          alt={props.product.name}
          src={props.product.img}
          style={{ width: "100%" }}
        />
      </Link>
      <h3>{props.product.name}</h3>
    </div>
  );
};

export default ProductCard;
