import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        meta: { title: 'Home' },
        component: () => import('../views/Home.vue'),
    },
   
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
