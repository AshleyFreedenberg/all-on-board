import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import { Button, Card } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import SignatureCanvas from 'react-signature-canvas'
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import pdf from "./../../pdf/W4Form.pdf";
import "./w4.css";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class W4Form extends Component {

  state = {
    username: "",
    email: "",
    sigPad: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      formType: "w-4",
      completed: true,
      userId: this.props.user.id,
      file: pdf,
      numPages: 4,
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
      console.log(res.data);
      this.setState({
        username: res.data[0].username,
        email: res.data[0].email,
        firstName: res.data[0].firstName,
        middleInitial: res.data[0].middleInitial,
        SSN: res.data[0].SSN,
        lastName: res.data[0].lastName,
        address: res.data[0].address
      })
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.setProfile(this.state).then(res => {
      console.log("Sumbit!")
      console.log(this.props.history)
      this.props.history.replace(`/profile`);
      // return this.props.history.push("/api/profile");
    });
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
            <Col>
              <Card>
                <Card.Body>
                  <h2>Please complete the Form W-4<br />Employee's Withholding Allowance Certificate</h2>
                  <p className="pbody">There are multiple pages needed to complete the Onboarding US W4 task. A W-4 wizard helps the new hire navigate through the steps:
  
  Instructions
  New Hire Information
  Withholding Elections. Note: New hires can access the IRS Withholding Calculator from Step 3 when completing the W-4 form. When they select the link, a new window/tab opens and the IRS Withholding Calculator page displays.
  Electronic Signature
Sign and Submit W-4 (Form W-4 PDF)</p>
                </Card.Body>
              </Card>
            </Col>
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
                <h1>W-4 Form</h1>
                <h4>Information needed to complete your W-4 Form</h4>
                <p>First Name: {this.state.firstName}</p>
                <p>Middle Initial: {this.state.middleInitial}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Address: {this.state.address}</p>

                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="SSN">2. SSN:</label>
                    <input className="form-control"
                      placeholder="Social Security Number"
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
                  <button type="submit" className="btn btn-primary">Submit <i class="fa fa-arrow-right" /></button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(withAuth(W4Form));



