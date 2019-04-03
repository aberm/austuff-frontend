import React from "react";

class Review extends React.Component {
  state = {
    review: ""
  };

  changeHandler = event => {
    this.setState(
      {
        review: event.target.value
      },
      () => console.log(this.state.review)
    );
  };

  formSubmit = event => {
    event.preventDefault();
  };

  componenentDidMount() {}
  render() {
    let options = [];
    console.log("YA ORDER HERE: ", this.props.order);
    if (this.props.order.id !== "loading") {
      options = this.props.order.order_items.map(thing => (
        <option value={thing.product.name}>{thing.product.name}</option>
      ));
    }
    return (
      <div className="review">
        <h5>Add a review</h5>
        <form className="review-input" onSubmit={this.formSubmit}>
          <select>{options}</select>
          <br />
          <textarea
            rows="4"
            value={this.state.review}
            name="review"
            onChange={this.changeHandler}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Review;
