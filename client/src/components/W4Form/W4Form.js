import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';

import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import SignatureCanvas from 'react-signature-canvas'

class W4Form extends Component {

  state = {
    username: "",
    email: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      formType: "w-4",
      completed: true 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
  }

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        address: res.data.address
      })
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.setProfile(this.state).then(res => {
      alert("Thank you for completing your profile!")
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    // const name = event.target.name;
    // const value = event.target.value
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };
  // eslint-disable-next-line no-dupe-class-members
  render() {
    return (
      <div className="profile container">
        <h1>W-4 Form</h1>
        <h4>Below is information needed to complete your W-4 Form</h4>
        <p>First Name: {this.state.firstName}</p>
        <p>Last Name: {this.state.lastName}</p>
        <p>Address: {this.state.address}</p>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="SSN">SSN:</label>
            <input className="form-control"
              placeholder="SSN goes here..."
              name="SSN"
              type="text"
              id="SSN"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="married">Marital Status:
              <br></br>
              <select className="form-control"
                name="married"
                type="married"
                id="married"
                onChange={this.handleChange}>
                <option>Select</option>
                <option>Single</option>
                <option>Married</option>
                <option>Married, but withhold at higher Single rate (married filling separately)</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="numberofAllowances">Total number of allowances you’re claiming:</label>
            <input className="form-control"
              placeholder="Allowance Number goes here..."
              name="numberofAllowances"
              type="text"
              id="numberofAllowances"
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
          <div className="form-group">
            <label htmlFor="date">Today's Date:</label>
            <br></br>
            <DatePicker className="form-control"
              placeholder="Today's Date goes here..."
              name="date"
              type="text"
              id="date"
              onChange={this.handleChange}
              onChange={this.handleChangeDate}
              selected={this.state.startDate}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

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
              onChange={this.handleChangeDate}
              selected={this.state.startDate}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
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
          <div>
            <SignatureCanvas penColor='blue'
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas', style: { border: 'solid 1px black' } }} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default withAuth(W4Form);



