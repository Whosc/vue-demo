<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <test msg="Welcome to Your Vue.js App"/>
    <!-- {{smg}} -->
  </div>
</template>

<script>
import test from './components/test.vue'

export default {
    name: 'app',
    components: {
        test
    },
    // data(){
    //     return {
    //         smg:'456'
    //     }
    // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
