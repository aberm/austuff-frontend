import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    password_confirmation: ""
  };

  formChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitSignup = event => {
    event.preventDefault();

    // post users
    // get token (this functionality already is in place for login)

    this.setState({
      username: "",
      password: "",
      password_confirmation: ""
    });
  };

  render() {
    return (
      <div className="signup">
        <h1>Hello from Signup</h1>
        <form onSubmit={this.submitSignup}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.formChangeHandler}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.formChangeHandler}
            placeholder="password"
          />
          <input
            type="password"
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.formChangeHandler}
            placeholder="password confirmation"
          />
          <br />
          <button>Submit</button>
        </form>
        {this.props.user.id && <Redirect to="/shop" />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Signup);
