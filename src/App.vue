<script>
import NavBar from './components/NavBar.vue';
// import Content from './components/Content.vue';
import Mainbody from './components/MainBody.vue';

export default {
    setup() {
        return {};
    },
    components: { 
      NavBar,
      // Content,
      Mainbody,
     }
}
</script>

<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <Mainbody/>
    </main>
    <footer></footer>
</template>



<style>
 /* header{
    width: 100%;
  } */
</style>