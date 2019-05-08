import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';
import { Button, Card } from 'react-bootstrap';
import './style.css'

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
       
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
        // this.props.history.replace('/profile');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container col-md-4 signup-bg">
<Card>
  <Card.Body>
        <h1>SIGN UP</h1>
        <hr />
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className="form-control"
              placeholder="Username"
              name="username"
              type="text"
              id="username"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className="form-control"
              placeholder="Email address"
              name="email"
              type="email"
              id="email"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={this.handleChange} />
          </div>
          <Button type="submit" className="btn btn-primary">Submit <i class="fa fa-arrow-right"/></Button>
        </form>
        </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Signup;