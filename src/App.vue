<script>
import Navigation from './components/Navigation.vue';
// import Content from './components/Content.vue';
import Mainbody from './components/MainBody.vue';

export default {
    setup() {
        return {};
    },
    components: { 
      Navigation,
      // Content,
      Mainbody,
     }
}
</script>

<template>
    <header>
        <Navigation/>
    </header>
    <main>
        <Mainbody/>
    </main>
    <footer></footer>
</template>



<style>

</style>