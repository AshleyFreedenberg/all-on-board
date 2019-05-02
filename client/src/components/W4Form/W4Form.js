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
        middleInitial: res.data.middleInitial,
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
        <p>Middle Initial: {this.state.middleInitial}</p>
        <p>Last Name: {this.state.lastName}</p>
        <p>Address: {this.state.address}</p>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="SSN">2. SSN:</label>
            <input className="form-control"
              placeholder="SSN goes here..."
              name="SSN"
              type="text"
              id="SSN"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="married">3. Marital Status:
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
            <label htmlFor="numberofAllowances"> 5. Total number of allowances you’re claiming:</label>
            <input className="form-control"
              placeholder="Allowance Number goes here..."
              name="numberofAllowances"
              type="text"
              id="numberofAllowances"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="additionalAmount"> 6. Additional amount, if any, you want withheld from each paycheck:</label>
            <input className="form-control"
              placeholder="Additional amount, goes here... (0.00 format)"
              name="additionalAmount"
              type="text"
              id="additionalAmount"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exempt">7. I claim exemption from withholding for 2019, and I certify that I meet both of the conditions for exemption:
              <br></br>
              <select className="form-control"
                name="exempt"
                type="text"
                id="exempt"
                onChange={this.handleChange}>
                <option>Select</option>
                <option>Exempt</option>
                <option>Non-Exempt</option>
              </select>
            </label>
          </div>
          <div>
          <label htmlFor="date">Employee’s signature:</label>
          <br></br>
            <SignatureCanvas penColor='blue'
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas', style: { border: 'solid 1px black' } }} />
          </div>
          <div>
          <button className="clearButton">Clear</button>
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
      </div>
    );
  }
}

export default withAuth(W4Form);



