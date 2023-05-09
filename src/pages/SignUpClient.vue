<template>
    <div>
      <h2>Sign Up</h2>
      <form @submit.prevent="signup">
        <div>
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" v-model="user.firstname">
        </div>
        <div>
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" v-model="user.lastname">
        </div>
        <div>
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="user.email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="user.password">
        </div>
        <div>
          <label for="password-confirmation">Confirm Password</label>
          <input type="password" id="password-confirmation" v-model="user.password_confirmation">
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const Api_url = "https://techzone.herokuapp.com";
  const form_error = [];
  
  export default {
    data() {
      return {
        user:{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                password_confirmation: ''},
                
        // passwordConfirmation: '',
      };
    },
    methods: {
      async signup() {
        try {
          const response = await axios.post(`${Api_url}/api/register`, this.user);
          console.log(response.data);
                    //handle successful signup
                    this.$router.push('/login');
                    console.log(response.data);
        } catch (error) {
          console.error(error);
          // console.error("main error: " + error.request.response);
          form_error.push(error.request.response)
          console.log(JSON.stringify(form_error))
        } 
      },
    },
  };
  </script>
  