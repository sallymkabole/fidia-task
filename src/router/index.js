import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
       
      {
        path: '/',
        name: 'Signin',
        component: () => import('../views/Signin.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
    },
        
    ]
});


export default router;