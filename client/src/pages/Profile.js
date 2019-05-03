import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';

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
      <div className="profile-page">
        <div className="container Profile">
          <h1>Welcome Aboard {this.state.username}!</h1>
          <Link to="/">Go home</Link>
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
                <td><button className="btn btn-success">Start </button></td>
              </tr>
              <tr>
                <td>I-9</td>
                <td>May 7th, 2019</td>
                <td>Incomplete</td>
                <td><button className="btn btn-success">Start </button></td>
              </tr>
              <tr>
                <td>Policy Manual</td>
                <td>May 7th, 2019</td>
                <td>Incomplete</td>
                <td><button className="btn btn-success">Start </button></td>
              </tr>
              <tr>
                <td>Training Manual</td>
                <td>May 7th, 2019</td>
                <td>Incomplete</td>
                <td><button className="btn btn-success">Start </button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
