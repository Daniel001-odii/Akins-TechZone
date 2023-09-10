<template>
    <div class="box">
    <img src="../components/Logos_icons/techzoneSingle.png" />
    <!-- <div class="col-3"> -->
        <div class="snippet" data-title="dot-flashing">
          <div class="stage">
            <div class="dot-flashing"></div>
          </div>
        </div>
      <!-- </div> -->
    <!-- <div class="spinner-border text-primary" role="status"></div> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100%;
}

/* img{
    filter: grayscale(100%);
    animation: pulse 1s linear infinite;
}

@keyframes pulse {
0% {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}
50% {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
100% {
   -webkit-transform: scale(1);
  transform: scale(1);
}
} */


/**
 * ==============================================
 * Dot Flashing
 * ==============================================
 */

 .snippet{
    margin-top: 10px;
 }
 .dot-flashing {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--app-blue);
  color: var(--app-blue);
  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: 0.5s;
}
.dot-flashing::before, .dot-flashing::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-flashing::before {
  left: -15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--app-blue);
  color: var(--app-blue);
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 0s;
}
.dot-flashing::after {
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--app-blue);
  color: var(--app-blue);
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 1s;
}

@keyframes dot-flashing {
  0% {
    background-color: var(--app-blue);
  }
  50%, 100% {
    background-color: rgba(152, 128, 255, 0.2);
  }
}

</style>