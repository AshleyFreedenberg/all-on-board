import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('/api/signup', {username: username, email: email, password: password});
  },
  // route to set profile data for employee
  setProfile: (formDataObj) => {
    return axios.post('/api/form', formDataObj);
  },
  getFile: (id) => {
    return axios.get(`/api/user/${id}`);
  },

  getAllFilesOneUser: (userId) => {
    return axios.get(`/api/getallfilesoneuser/${userId}`)
  }
};

