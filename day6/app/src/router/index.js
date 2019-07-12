import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: "/home"
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/my',
            name: 'my',
            component: My
        }
    ]
})