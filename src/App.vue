<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">about</router-link>
        </nav>
   
        <!-- <test msg="Welcome to Your Vue.js App"/> -->

        <!-- {{smg}} -->
        <router-view></router-view>
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
nav {
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  margin-right: 15px;
  background: #ff8a00;
}

</style>
