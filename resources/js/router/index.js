import { createRouter, createWebHistory } from "vue-router";

import home from '@/components/home/Landing.vue';

const routes = [
    {
        path:'/',
        name:'Home',
        component:home
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise ((resolve => {
            setTimeout(() => resolve({top:0, behavior: "smooth"}),1)
        }))
        return {top:null,left:null, behavior: null}
    }
})
  export default router;
