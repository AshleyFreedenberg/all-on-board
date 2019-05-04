import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Icon from './components/Icon';
import CarouselContainer from './components/CarouselContainer';

// import W4Form from "./components/W4Form";
// import ProfileForm from "./components/ProfileForm";
// import I-9Form from "./components/I-9Form";
// import PolicyManual from "./components/PolicyManual";
// import EmpTrainManual.jsForm from "./components/EmpTrainManual";
import Footer from './components/Footer';
import W4Form from "./components/W4Form";
import ProfileFormPage from './pages/ProfileFormPage';
import W4FormPage from './pages/W4FormPage';
import I9FormPage from './pages/I9FormPage';
import PolicyManualFormPage from './pages/PolicyManualFormPage';
import EmpTrainManualFormPage from './pages/EmpTrainManualFormPage';


// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={CarouselContainer} />
            <Route exact path="/" component={Icon} />
            {/* <Route exact path="/" component={ProfileForm} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profileFormPage" component={ProfileFormPage} />
            <Route exact path="/w4FormPage" component={W4FormPage} />
            <Route exact path="/i9FormPage" component={I9FormPage} /> 
            <Route exact path="/policyManualFormPage" component={PolicyManualFormPage} />
            <Route exact path="/empTrainManualFormPage" component={EmpTrainManualFormPage} />
            <Footer />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
// export default SignaturePad;