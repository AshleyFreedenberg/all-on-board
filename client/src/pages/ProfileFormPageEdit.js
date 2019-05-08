import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import ProfileFormEdit from '../components/ProfileFormEdit';
import { Button, } from 'react-bootstrap';

class ProfileFormPageEdit extends Component {

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
      <div>
        <div className="container Profile">
          {/* <Link to="/profile"><Button className="btn btn-info">Back to Employee Profile</Button></Link> */}
          <ProfileFormEdit />
        </div>
      </div >
    );
  }
}

export default withAuth(ProfileFormPageEdit);
