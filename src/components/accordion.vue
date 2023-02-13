<template>
    <div class="dropdown">
        <span class="location">Location</span>
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div>
            <LocationBadge/>
            Lagos
            </div>
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
</template>

<script>
import LocationBadge from './locationBadge.vue';

    export default {
    components: { LocationBadge }
}
</script>

<style scoped>
    .btn{
        height: 30px;
        width: 200px;
        border: 1px solid #E3DFDF;
        /* padding: 10px; */
    }
    .location{
        font-size: 0.8em;
        /* font-weight: bold; */
        padding: none;
        margin: none;
    }
    .dropdown-toggle{
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>