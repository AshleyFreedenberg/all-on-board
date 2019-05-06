import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import { ProgressBar, Button, Card, Modal } from 'react-bootstrap';
import './profile.css';

// const now = 50;

class Profile extends Component {

  state = {
    username: "",
    email: "",
    isProfileComplete: false,
    isW4Complete: false,
    isI9Complete: false,
    isPolicyComplete: false,
    isManualComplete: false,
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });

    API.getAllFilesOneUser(this.props.user.id).then(res => {
      console.log(res)

      if (res.data.length === 5) {
        // console.log('works')
        this.handleShow();
      }

      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].formType === "profile") {
          this.setState({
            isProfileComplete: true
          })
        };
        if (res.data[i].formType === "w-4") {
          this.setState({
            isW4Complete: true
          })
        };
        if (res.data[i].formType === "i-9") {
          this.setState({
            isI9Complete: true
          })
        };
        if (res.data[i].formType === "policy") {
          this.setState({
            isPolicyComplete: true
          })
        };
        if (res.data[i].formType === "manual") {
          this.setState({
            isManualComplete: true
          })
        };
      }

      this.setState({
        filesComplete: res.data.length,
        userdata: res.data
      })
      console.log(this.state.filesComplete);
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


        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Congratulations {this.state.username}!</Modal.Title>
          </Modal.Header>
          <Modal.Body>You've completed all of the required forms and you're ready to begin working for Chardo Brewing Co!</Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>

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
              <h2>{this.state.username}, please complete the forms below before your start date!</h2><hr /><br />
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
                <td>{this.state.isProfileComplete ? <p>Received <i class="far fa-thumbs-up" /></p> : <p>Not yet received <i class="far fa-thumbs-down" /></p>}</td>
                <td>
                  {this.state.isProfileComplete
                    ? <Link to="#"><Button className="btn btn-primary">Edit <i class="fa fa-arrow-right" /></Button></Link>
                    : <Link to="/profileFormPage"><Button className="btn btn-success">Start <i class="fa fa-checkmark-right" /></Button></Link>
                  }

                </td>
              </tr>

              <tr>
                <td>Form W-4</td>
                <td>May 7th, 2019</td>
                <td>{this.state.isW4Complete ? <p>Received <i class="far fa-thumbs-up" /></p> : <p>Not yet received <i class="far fa-thumbs-down" /></p>}</td>
                <td>
                  {this.state.isW4Complete
                    ? <Link to="#"><Button className="btn btn-primary">Edit <i class="fa fa-arrow-right" /></Button></Link>
                    : <Link to="/w4FormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right" /></Button></Link>
                  }
                  {/* <Link to="/w4FormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right" /></Button></Link> */}
                </td>
              </tr>
              <tr>
                <td>Form I-9</td>
                <td>May 7th, 2019</td>
                <td>{this.state.isI9Complete ? <p>Received <i class="far fa-thumbs-up" /></p> : <p>Not yet received <i class="far fa-thumbs-down" /></p>}</td>
                <td>
                  {this.state.isI9Complete
                    ? <Link to="#"><Button className="btn btn-primary">Edit <i class="fa fa-arrow-right" /></Button></Link>
                    : <Link to="/i9FormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right" /></Button></Link>
                  }
                  {/* <Link to="/i9FormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right" /></Button></Link> */}
                </td>
              </tr>
              <tr>
                <td>Policy Manual</td>
                <td>May 7th, 2019</td>
                <td>{this.state.isPolicyComplete ? <p>Received <i class="far fa-thumbs-up" /></p> : <p>Not yet received <i class="far fa-thumbs-down" /></p>}</td>
                <td>
                  {this.state.isPolicyComplete
                    ? <Link to="#"><Button className="btn btn-primary">Edit <i class="fa fa-arrow-right" /></Button></Link>
                    : <Link to="/policyManualFormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right" /></Button></Link>
                  }
                  {/* <Link to="/policyManualFormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right" /></Button></Link> */}
                </td>
              </tr>
              <tr>
                <td>Training Manual</td>
                <td>May 7th, 2019</td>
                <td>{this.state.isManualComplete ? <p>Received <i class="far fa-thumbs-up" /></p> : <p>Not yet received <i class="far fa-thumbs-down" /></p>}</td>
                <td>
                {this.state.isPolicyComplete
                    ? <Link to="#"><Button className="btn btn-primary">Edit <i class="fa fa-arrow-right" /></Button></Link>
                    : <Link to="/empTrainManualFormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right" /></Button></Link>
                  }
                  {/* <Link to="/empTrainManualFormPage"><Button className="btn btn-success">Start <i class="fa fa-arrow-right" /></Button></Link> */}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
