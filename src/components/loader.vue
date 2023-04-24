<template>
    <div class="loader">
        <div class="loader__element"></div>
    </div>
</template>
<script>
</script>
<style scoped>

.loader {
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
	background: var(--main-color);
	overflow: hidden;
    width: 100%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: flex-start; 
}

.loader__element {
	height: var(--size);
	width: 100%;
	background: var(--back-color);
}

.loader__element:before {
	content: '';
	display: block;
    background: red;
	height: var(--size);
	width: 10%;
    /* border-radius: 30px; */
    animation: getWidth 3s ease-in infinite;

}

@keyframes getWidth {
	100% { margin-left: 50%; width: 100%;}
}

</style>