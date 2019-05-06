import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import EmpTrainManual from '../components/EmpTrainManual';
import { Button, } from 'react-bootstrap';


class EmpTrainManualFormPage extends Component {

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
      <EmpTrainManual/>
   
        </div>
      </div >
    );
  }
}

export default withAuth(EmpTrainManualFormPage);
