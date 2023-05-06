<template>
    <div>
      <h2>Sign Up</h2>
      <form @submit.prevent="signup">
        <div>
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" v-model="firstName">
        </div>
        <div>
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" v-model="lastName">
        </div>
        <div>
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div>
          <label for="password-confirmation">Confirm Password</label>
          <input type="password" id="password-confirmation" v-model="passwordConfirmation">
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const Api_url = "https://techzone.herokuapp.com/";
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      };
    },
    methods: {
      async signup() {
        try {
          const response = await axios.post(`${Api_url}register`, {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  