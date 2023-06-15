<template>
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" :class="{'show': show}">
      <div class="toast-header">
        <strong class="me-auto" style="color: var(--app-blue);">Success</strong>
        <button type="button" class="btn-close" @click="dismissToast"></button>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
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
      showSuccessToast(message) {
        this.message = message;
        this.show = true;
        setTimeout(() => {
          this.dismissToast();
        }, 5000); // Hide toast after 5 seconds
      },
      dismissToast() {
        this.show = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 9999;
    width: 300px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .toast.show {
    opacity: 1;
  }
  </style>
  