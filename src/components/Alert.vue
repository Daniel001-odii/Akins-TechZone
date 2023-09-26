<template>
    <div v-if="show" class="toast">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
        message: '',
      };
    },
    methods: {
      showToast(message, duration = 3000) {
        this.message = message;
        this.show = true;
  
        setTimeout(() => {
          this.hideToast();
        }, duration);
      },
      hideToast() {
        this.show = false;
        this.message = '';
      },
    },
  };
  </script>
  
  <style>
  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
  </style>
  