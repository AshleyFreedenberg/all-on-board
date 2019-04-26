import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';

class Profile extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // eslint-disable-next-line no-dupe-class-members
  render() {
    return (
      <div>
        <div className="container Profile">
          <h1>On the profile page!</h1>
          <p>Username: {this.state.username}</p>
          <p>Email: {this.state.email}</p>
          <Link to="/">Go home</Link>
        </div>
        <div className="container">
          <h1>W-4</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input className="form-control"
                placeholder="First name goes here..."
                name="firstName"
                type="text"
                id="firstName"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input className="form-control"
                placeholder="Last name goes here..."
                name="lastName"
                type="text"
                id="lastName"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="ssn">SSN:</label>
              <input className="form-control"
                placeholder="SSN goes here..."
                name="ssn"
                type="ssn"
                id="ssn"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Address:</label>
              <input className="form-control"
                placeholder="Address goes here..."
                name="address"
                type="address"
                id="address"
                onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    </div >
    );
  }
}

export default withAuth(Profile);