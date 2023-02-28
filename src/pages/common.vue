<template>
    <div>
        <header><h4>Navbar</h4></header>
        <router-view></router-view>
        <footer><h5>Footer</h5></footer>
    </div>
</template>

<script>
    export default {
        
    }

    const routes = [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: HomePeg
                },
                {
                    path: 'about/',
                    component: AboutPage
                }
            ]
        }
    ]
</script>

<style lang="css" scoped>

</style>