<template>
  <transition name="slide-fade">
  <div v-if="showAlert" class="alert-container">

      <div :class="['alert', alertType]">
        <!-- <div class="icon"> -->
          <i :class="iconClass"></i>
        <!-- </div> -->
        <!-- <div class="content"> -->
          <div>{{ message }}</div>
          <div class="closeBtn" @click="showAlert = !showAlert">&times;</div>
        <!-- </div> -->
      </div>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    alertType: {
      type: String,
      default: 'info'
    },
    icon: {
      type: String,
      default: 'bi-info-circle-fill'
    },
  },
  data(){
    return {
      showAlert: true,
    }
  },
  computed: {
    iconClass() {
      return `fas ${this.icon}`;
    }
  },
  mounted(){
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
};
</script>
<style scoped>
.alert-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.alert {
  position: fixed;
  top: 20px;
  right: 20px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
  animation: slideInRight ease-out 0.5s;
  box-shadow: 0px 12px 12px #F1F4F4;
  background: #ffffff;
  z-index: 9999999999;
}

.closeBtn{
  padding: 10px;
  font-size: 30px;
}
.icon {
  margin-right: 10px;
}

/* Define different background colors for different alert types */
.info {
  /* background-color: #d1ecf1; */
  border-left: 8px solid blue;
  color: blue; /* Change this color as needed */
}

.success {
  border-left: 8px solid #d4edda;
  color: #198754; /* Change this color as needed */
}

.warning {
  border-left: 8px solid #fff3cd; /* Change this color as needed */
  color: #ffc107; /* Change this color as needed */
}

.error {
  border-left: 8px solid #f8d7da; /* Change this color as needed */
  color: #dc3545; /* Change this color as needed */
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-fade-enter-active {
  transition: all 0.5s;
}

.slide-fade-leave-active {
  transition: all 0.5s;
  opacity: 0;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(0);
  opacity: 1;
}
</style>
