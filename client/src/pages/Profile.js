import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import { ProgressBar, Button } from 'react-bootstrap';

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
      console.log(this.state.firstName)
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
    var percentage = (100 - ((4 - this.state.filesComplete) / 4 * 100)).toFixed(0);
    return (
      <div className="profile-page">
        <div className="container Profile">
          <h1>Welcome Aboard {this.state.username}!</h1>
          

          <ProgressBar now={percentage} label={`${percentage}%`} />
   <br/>
            {/* <Link to="/profileFormPage"><Button variant="primary">Profile Form</Button></Link>&nbsp;&nbsp;
            <Link to="/w4FormPage"><Button variant="primary">W4 Form</Button></Link>&nbsp;&nbsp;
            <Link to="/i9FormPage"><Button variant="primary">i9 Form</Button></Link>&nbsp;&nbsp;
            <Link to="/policyManualFormPage"><Button variant="primary">Policy Manual</Button></Link>&nbsp;&nbsp;
            <Link to="/empTrainManualFormPage"><Button variant="primary">Employee Training Manual</Button></Link>&nbsp;&nbsp; */}

          
        </div>

        <br /><br />
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
                <td>W4</td>
                <td>May 7th, 2019</td>
                <td>Incomplete</td>
                <td><Link to="/w4FormPage"><button className="btn btn-success">Start </button></Link></td>
              </tr>
              <tr>
                <td>I-9</td>
                <td>May 7th, 2019</td>
                <td>Incomplete</td>
                <td><Link to="/i9FormPage"><button className="btn btn-success">Start </button></Link></td>
              </tr>
              <tr>
                <td>Policy Manual</td>
                <td>May 7th, 2019</td>
                <td>Incomplete</td>
                <td><Link to="/policyManualFormPage"><button className="btn btn-success">Start </button></Link></td>
              </tr>
              <tr>
                <td>Training Manual</td>
                <td>May 7th, 2019</td>
                <td>Incomplete</td>
                <td><Link to="/empTrainManualFormPage"><button className="btn btn-success">Start </button></Link></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
