<template>
    <div class="box">
    <img src="../components/Logos_icons/techzoneSingle.png" />
    <!-- <div class="spinner-border text-primary" role="status"></div> -->
    <i>Loading...</i>
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

img{
    
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
}

</style>