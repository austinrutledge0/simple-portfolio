import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/test',
            component: HomePage,
        },
    ],
})

export const routerPush = (name, params) => {
    if (params !== undefined) {
        return router.push({
            name,
            params,
        })
    } else {
        return router.push({ name })
    }
}
