import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

  return (
      <div className="product-card">
        <p>{props.product.category}</p>
        <p>{props.product.name}</p>
        <Link to={`/products/${props.product.id}`}>
          <img alt={props.product.name} src={props.product.img} style={{width: "10%"}}/>
        </Link>
      </div>
  )
}

export default ProductCard;
