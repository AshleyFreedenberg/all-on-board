import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import pdf from "./../../pdf/TrainingManual.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class EmpTrainManual extends Component {

  state = {
    username: "",
    email: "",
    sigPad: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      formType: "manual",
      completed: true,
      userId: this.props.user.id,
      file: pdf,
      numPages: 27,
      pageNumber: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
    API.getAllFilesOneUser(this.props.user.id).then(res => {
      console.log(this.props.user.id);
      this.setState({
        username: res.data[0].username,
        email: res.data[0].email,
        firstName: res.data[0].firstName,
        lastName: res.data[0].lastName,
      })
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.setProfile(this.state).then(res => {
      alert("Thank you for completing your Employee Training Manual!")
      console.log(this.props.history)
      this.props.history.replace(`/profile`);
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

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  // eslint-disable-next-line no-dupe-class-members
  render() {
    const { pageNumber, numPages, file } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col>
            <div>
              <Document
                file={file}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
            </div>
            </Col>
            <Col>
              <div className="container">
                <h1>Employee Training Manual</h1>
                <h4>Information needed to complete your Employee Training Manual Form</h4>
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(withAuth(EmpTrainManual));



