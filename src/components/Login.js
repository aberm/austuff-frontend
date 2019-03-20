import React from 'react';
import { login, logout } from '../actions/userActions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Login extends React.Component {

  state = {
    userLogin: {
      username: '',
      password: ''
    },
    logged_in: !!localStorage.getItem("token"),
    worked: ""
  }

  submitLogin = (event) => {
    event.preventDefault();

    // make mapDispatchToProps
    // make controlled login (onChange)

    this.props.login(this.state.userLogin)
    .then(res => {
      if (res === "nope login didn't work") {
        this.setState({
          worked: "Login failed. Please try again"
        })
      }
      console.log("user here: ", this.props.user);
      const loggedIn = localStorage.getItem("token") !== null; // GEEEEZ. this bug took me hours 😡
      this.setState({
        userLogin: {
          username: '',
          password: ''
        },
        logged_in: loggedIn
      }, ()=> console.log(this.state))
    })

    // then -> redirect to /shop

  }

  logout = () => {
    localStorage.removeItem("token");
    this.props.logout();
    this.setState({
      logged_in: !!localStorage.getItem("token")
    })

    // then window.history.pushState("/login") or this.props.history.push("/login") withRouter ?
  }

  formChangeHandler = (event) => {
    this.setState({
      userLogin: {
        ...this.state.userLogin,
        [event.target.name]: event.target.value}
    }, ()=> console.log("full userLogin", this.state.userLogin))
  }

  render(){
    return (
      <>
      { this.state.logged_in ?
        (<div className="logout">
        <h4>Hello, <Link key={this.props.user.id} to={`/users/${this.props.user.id}`}>
          {this.props.user.username}
          </Link>
        </h4>
        <button onClick={this.logout}>Logout</button>
        </div>)
        :
        (<div className="login">
          <h1>Hello from Login</h1>
          <form onSubmit={this.submitLogin}>
            <input type="text" name="username" value={this.state.userLogin.username} onChange={this.formChangeHandler} placeholder="username" />
            <input type="password" name="password" value={this.state.userLogin.password} onChange={this.formChangeHandler} placeholder="password" />
            <button>Submit</button>
          </form>
          {this.state.worked}
        </div>)}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userLogin) => dispatch(login(userLogin)),
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
