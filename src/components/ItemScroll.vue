<template>
 <div class="scroll-container">
  <div class="brand-wheel">
    <div class="brand-slide">
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-1.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-2.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-3.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-4.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-5.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo.svg">
      </div>
    </div>
    <div class="brand-slide delay">
        <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-1.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-2.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-3.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-4.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo-5.svg">
      </div>
      <div class="logo-div">
        <img alt="Company Logo" src="./Logos_icons/CompanyLogo.svg">
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

@keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  .scroll-container {
    margin-top: 30px !important;
    background: #fff;
    width: 100%;
    height: 80px !important;
    /* border: 2px solid red; */
  }
  
  .brand-wheel {
    flex-direction: row;
    align-items: center;
    display: flex;
    overflow: hidden;
    position: relative;
    height: 80px;
    /* border: 1px solid green; */
    --animationspeed: 45s;
    --animationdelay: calc(var(--animationspeed) / 2);
  }
  
  .brand-wheel::before {
    position: absolute;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100%;
    width: 5%;
    z-index: 2;
    pointer-events: none;
  }
  .brand-wheel::after {
    position: absolute;
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100%;
    width: 5%;
    z-index: 2;
    pointer-events: none;
    right: 0;
  }
  
  .brand-slide {
    flex-shrink: 0;
    position: absolute;
    animation-name: slidelogo;
    animation-duration: var(--animationspeed);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    min-width: 100%;
    display: flex;
    justify-content: space-around;
  }
  
  .brand-slide.delay {
    transform: translateX(100%);
    animation-name: slidelogo2;
  }
  
  .brand-wheel:hover .brand-slide {
    animation-play-state: paused;
  }
  
  .logo-div {
    display: inline-flex;
    align-self: center;
    animation: fade-in 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    padding: 0 20px 0 20px;
  }
  
  @keyframes slidelogo {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  @keyframes slidelogo2 {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
</style>