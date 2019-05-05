import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import SignatureCanvas from 'react-signature-canvas';
import './i9style.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

import pdf from "./../../pdf/I9Form.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
      file: pdf,
      numPages: 3,
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
      console.log(res.data[0])
      this.setState({
        firstName: res.data[0].firstName,
        middleInitial: res.data[0].middleInitial,
        lastName: res.data[0].lastName,
        address: res.data[0].address,
        dateOfBirth: res.data[0].dateOfBirth,
        SSN: res.data[0].SSN,
        email: res.data[0].email,
        phone: res.data[0].phone
      })
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.setProfile(this.state).then(res => {
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
          <br></br>
          <Row>
            <Card>
              <Card.Body>
                <h2>Please complete the Form I-9</h2>
                <p className="pbody">Form I-9 is used for verifying the identity and employment authorization of individuals hired for employment in the United States. All U.S. employers must ensure proper completion of Form I-9 for each individual they hire for employment in the United States. This includes citizens and noncitizens. Both employees and employers (or authorized representatives of the employer) must complete the form. On the form, an employee must attest to his or her employment authorization. </p>
              </Card.Body>
            </Card>
          </Row>
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
                <h1>I-9 Form</h1>
                <h4>Information needed to complete your I-9 Form</h4>
                <hr />
                <p><span className="pcompleted">First Name:</span> {this.state.firstName}</p>
                <p><span className="pcompleted">Middle Initial: </span>{this.state.middleInitial}</p>
                <p><span className="pcompleted">Last Name: </span>{this.state.lastName}</p>
                <p><span className="pcompleted">Address: </span>{this.state.address}</p>
                <p><span className="pcompleted">DOB: </span>{this.state.dateOfBirth}</p>
                <p><span className="pcompleted">SSN: </span>{this.state.SSN}</p>
                <p><span className="pcompleted">Email: </span>{this.state.email}</p>
                <p><span className="pcompleted">Phone: </span>{this.state.phone}</p>
                <hr />
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

export default withRouter(withAuth(I9Form));



