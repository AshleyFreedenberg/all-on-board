import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

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
    // get user id from props
    // (this.props.user.id)
    // create request body
    // send request
    // handle response
    /* 
    {
      email: "asdf",
      foo: "shoe",
      userId: this.props.user.id,
      ...

    }
    */
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
        <div className="profile container">
          <h1>Profile</h1>
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
              <label htmlFor="middleInitial">Middle Initial:</label>
              <input className="form-control"
                placeholder="Middle Initial goes here..."
                name="middleInitial"
                type="text"
                id="middleInitial"
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
            <label htmlFor="DOB">Date of Birth:</label>
            <br></br>
              <DatePicker className="form-control"
                placeholder="DOB goes here..."
                name="DOB"
                type="text"
                id="DOB"
                onChange={this.handleChange}
                selected={this.state.startDate}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input className="form-control"
                placeholder="Email goes here..."
                name="email"
                type="text"
                id="email"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input className="form-control"
                placeholder="Phone Number goes here..."
                name="phone"
                type="text"
                id="phone"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input className="form-control"
                placeholder="Address goes here..."
                name="address"
                type="text"
                id="address"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:
              <br></br>
                <select className="form-control"
                  name="gender"
                  type="gender"
                  id="gender"
                  onChange={this.handleChange}>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="preferredName">Preferred Name:</label>
              <input className="form-control"
                placeholder="Preferred Name goes here..."
                name="preferredName"
                type="preferredName"
                id="preferredName"
                onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <br></br>
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