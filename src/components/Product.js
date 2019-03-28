import React from "react";
import Cart from "../containers/Cart";
import { connect } from "react-redux";

const Product = props => {
  console.log("PRODUCTS: ", props.products);
  const theProduct = props.products.find(
    product => product.id === parseInt(props.routerProps.match.params.id)
  );
  console.log("the product: ", theProduct);
  return (
    <div className="product">
      <h1>{theProduct.name}</h1>
      {props.products.length > 0 ? (
        <>
          <img alt="" src={theProduct.img} className="product-img" />
          <p>Price: ${theProduct.price / 100}</p>
        </>
      ) : null}
      {/* <Cart /> */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("PRODUCT state: ", state);
  return {
    products: state.products
  };
};

// export default Product;
export default connect(mapStateToProps)(Product);
