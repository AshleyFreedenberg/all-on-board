import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';

import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import SignatureCanvas from 'react-signature-canvas'

class PolicyManual extends Component {

  state = {
    username: "",
    email: "",
    sigPad: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      formType: "policy",
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
      console.log(this.props.user.id);
      this.setState({
        username: res.data.username,
        email: res.data.email,
      })
    });
    API.getFile(this.props.user.id).then(res => {
      console.log(this.props.user.id);
      this.setState({
        username: res.data.username,
        email: res.data.email,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
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

  clearForm = e => {
    e.preventDefault()
    this.sigPad.clear()
  }

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
        <h1>Policy Manual</h1>
        <h4>Below is information needed to complete your Policy Manual Form</h4>
        <p>First Name: {this.state.firstName}</p>
        <p>Last Name: {this.state.lastName}</p>

        <form onSubmit={this.handleFormSubmit}>
          <label>
          <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} /> &nbsp;
           I agree to the terms and conditions.
          </label>
          <div>
            <label htmlFor="date">Employee’s signature:</label>
            <br></br>
            <SignatureCanvas penColor='blue'
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas', style: { border: 'solid 1px black' } }}
              ref={(ref) => { this.sigPad = ref }}
            />
          </div>
          <div>
            <button className="clearButton" onClick={this.clearForm}>Clear</button>
          </div>
          <br></br>
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
      </div>
    );
  }
}

export default withAuth(PolicyManual);



