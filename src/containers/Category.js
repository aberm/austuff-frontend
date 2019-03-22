import React from "react";

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <h1>Hello from {this.props.match.params.category} Category</h1>
      </div>
    );
  }
}

export default Category;
