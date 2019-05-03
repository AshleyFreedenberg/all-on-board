import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import SignatureCanvas from 'react-signature-canvas'

class I9Form extends Component {

  state = {
    username: "",
    email: "",
    sigPad: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      formType: "i-9",
      completed: true,
      userId: this.props.user.id,
      
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
        firstName: res.data.firstName,
        middleInitial: res.data.middleInitial,
        lastName: res.data.lastName,
        address: res.data.address,
        dateOfBirth: res.data.dateOfBirth,
        SSN: res.data.SSN,
        email: res.data.email,
        phone: res.data.phone
      })
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.setProfile(this.state).then(res => {
      alert("Thank you for completing your I-9 Form!")
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
      <div className="container">
        <h1>I-9 Form</h1>
        <h4>Below is information needed to complete your I-9 Form</h4>
        <p>First Name: {this.state.firstName}</p>
        <p>Middle Initial: {this.state.middleInitial}</p>
        <p>Last Name: {this.state.lastName}</p>
        <p>Address: {this.state.address}</p>
        <p>DOB: {this.state.dateOfBirth}</p>
        <p>SSN: {this.state.SSN}</p>
        <p>Email: {this.state.email}</p>
        <p>Phone: {this.state.phone}</p>

        <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
            <label htmlFor="citizenship">I attest, under penalty of perjury, that I am:
              <br></br>
              <select className="form-control"
                name="citizenship"
                type="text"
                id="citizenship"
                onChange={this.handleChange}>
                <option>Select</option>
                <option>1. A citizen of the United States</option>
                <option>2. A noncitizen national of the United States (See instructions)</option>
                <option>3. A lawful permanent resident</option>
                <option>4. An alien authorized to work</option>
              </select>
            </label>
          </div>
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
         <Button type="submit" className="btn btn-primary">Submit</Button>
        </form>
      </div>
    );
  }
}

export default withAuth(I9Form);



