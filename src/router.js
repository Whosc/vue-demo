import Vue from 'vue'
import Router from 'vue-router'
import test from './components/test.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: test
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
    ]
})