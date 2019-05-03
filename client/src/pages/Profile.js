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
      <div>
        <div className="container Profile">
          <h1>Welcome Aboard {this.state.username}!</h1>
          <h1>Welcome Aboard {this.state.firstName}!</h1>

          <ProgressBar now={percentage} label={`${percentage}%`} />
   <br/>
            <Link to="/profileFormPage"><Button variant="primary">Profile Form</Button></Link>&nbsp;&nbsp;
            <Link to="/w4FormPage"><Button variant="primary">W4 Form</Button></Link>&nbsp;&nbsp;
            <Link to="/i9FormPage"><Button variant="primary">i9 Form</Button></Link>&nbsp;&nbsp;
            <Link to="/policyManualFormPage"><Button variant="primary">Policy Manual</Button></Link>&nbsp;&nbsp;
            <Link to="/empTrainManualFormPage"><Button variant="primary">Employee Training Manual</Button></Link>&nbsp;&nbsp;

          
        </div>

      </div >
    );
  }
}

export default withAuth(Profile);
