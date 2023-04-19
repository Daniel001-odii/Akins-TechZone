<template>
<NavBarHome>
    <span><RouterLink to="/client/post-a-job">Post A Job</RouterLink></span>
    <span><RouterLink to="/customize-profile-client">Hire Talent</RouterLink></span>
</NavBarHome>
<div class="page-content">
    <h2>Welcome to your Dashboard</h2>
    <RouterLink to="/client/post-a-job"><small style="color: var(--app-blue)">Post a Job</small></RouterLink>
</div>

</template>

<script>
import NavBarHome from '../components/NavBarHome.vue';

    export default {
    components: { NavBarHome }
}
</script>

<style scoped>
.page-content{
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    padding-top: 100px;
    flex-direction: column;
}
</style>