<template>
    <div class="box">
      <!-- <div class="loader">
        <img src="../components/Logos_icons/techzoneSingle.png" />
      </div> -->
      <div class="loaderClass">
      <img src="https://www.tutorialspoint.com/static/images/client/science.svg" alt="logoImage">
   </div>


      <!-- <div class="loader-container">
      <div class="loader">
    <div class="logo"></div>
  </div> 
</div>-->
    <!-- <div class="spinner-border text-primary" role="status"></div>
    <i>Loading...</i> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.loaderClass {
         border: 12px solid #dcd7d7;
         border-top: 12px solid #04802f;
         border-radius: 50%;
         width: 120px;
         height: 120px;
         animation: SpinLoader 2.5s linear infinite;
      }
      .loaderClass img {
         height: 120px;
         width: 120px;
         border-radius: 50%;
         animation: LogoModify 2.5s linear infinite;
      }
      @keyframes SpinLoader {
         0% {
            transform: rotate(0deg);
         }
         100% {
            transform: rotate(360deg);
         }
      }
      @keyframes LogoModify {
         0% {
            transform: rotate(360deg);
         }
         100% {
            transform: rotate(0deg);
         }
      }


/* .box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100%;
} */
/* //pulse.... */
/* .dot-pulse {
  position: relative;
  left: -9999px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--app-blue);
  color: var(--app-blue);
  box-shadow: 9999px 0 0 -5px;
  animation: dot-pulse 1.5s infinite linear;
  animation-delay: 0.25s;
}
.dot-pulse::before, .dot-pulse::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--app-blue);
  color: var(--app-blue);
}
.dot-pulse::before {
  box-shadow: 9984px 0 0 -5px;
  animation: dot-pulse-before 1.5s infinite linear;
  animation-delay: 0s;
}
.dot-pulse::after {
  box-shadow: 10014px 0 0 -5px;
  animation: dot-pulse-after 1.5s infinite linear;
  animation-delay: 0.5s;
}

@keyframes dot-pulse-before {
  0% {
    box-shadow: 9984px 0 0 -5px;
  }
  30% {
    box-shadow: 9984px 0 0 2px;
  }
  60%, 100% {
    box-shadow: 9984px 0 0 -5px;
  }
}
@keyframes dot-pulse {
  0% {
    box-shadow: 9999px 0 0 -5px;
  }
  30% {
    box-shadow: 9999px 0 0 2px;
  }
  60%, 100% {
    box-shadow: 9999px 0 0 -5px;
  }
}
@keyframes dot-pulse-after {
  0% {
    box-shadow: 10014px 0 0 -5px;
  }
  30% {
    box-shadow: 10014px 0 0 2px;
  }
  60%, 100% {
    box-shadow: 10014px 0 0 -5px;
  }
} */



</style>