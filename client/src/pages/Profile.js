import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import { ProgressBar, Button, Container, Card } from 'react-bootstrap';
import './profile.css';

// const now = 50;

class Profile extends Component {

  state = {
    username: "",
    email: "",
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email

      })
    });

    API.getAllFilesOneUser(this.props.user.id).then(res => {
      console.log(res)
      this.setState({
        filesComplete: res.data.length,


      })
      console.log(this.state.filesComplete);
      // console.log(this.state.firstName)
    });

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
    var percentage = (100 - ((5 - this.state.filesComplete) / 5 * 100)).toFixed(0);
    return (
      <div className="profile-page">
        <div className="container Profile">
          <hr />
          <h1>Welcome Aboard, {this.state.username}!</h1>
          <p className="pbody">
            Welcome to Chardo Brewing Co!
We are pleased to have you joining our team. Are you ready to fall in love with your new job and meet your great new teammates?<br /><br />

            I hope you are, because it’s going down, your first day on the new job will take place on May 7, 2019. We’ll be expecting you at 12:00pm at Chardo Brewing Co home office.<br /><br />

            We planned your first day in order to help you settle in easily but first we need you to complete the onboarding process. Before your first day, please have the forms below submitted.

          </p>
          <hr />
          <br /><br />
          <Card>
            <Card.Body>
              <h2>{this.state.username}, please complete the forms below before your start date!</h2><hr/><br />
              <h5>PERCENTAGE OF FORMS COMPLETED</h5>
              <ProgressBar now={percentage} label={`${percentage}%`} />
            </Card.Body>
          </Card>
        </div>


        <div className="col-md-11">
          <Table striped bordered hover className="profileTable">
            <thead>
              <tr>

                <th>Form</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td>Employee Profile</td>
                <td>May 7th, 2019</td>
                <td>Not yet received</td>
                <td><Link to="/profileFormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right"/></Button></Link></td>
              </tr>

              <tr>
                <td>Form W-4</td>
                <td>May 7th, 2019</td>
                <td>Not yet received</td>
                <td><Link to="/w4FormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right"/></Button></Link></td>
              </tr>
              <tr>
                <td>Form I-9</td>
                <td>May 7th, 2019</td>
                <td>Not yet received</td>
                <td><Link to="/i9FormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right"/></Button></Link></td>
              </tr>
              <tr>
                <td>Policy Manual</td>
                <td>May 7th, 2019</td>
                <td>Not yet received</td>
                <td><Link to="/policyManualFormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right"/></Button></Link></td>
              </tr>
              <tr>
                <td>Training Manual</td>
                <td>May 7th, 2019</td>
                <td>Not yet received</td>
                <td><Link to="/empTrainManualFormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right"/></Button></Link></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
