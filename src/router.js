import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import ProjectsPage from './components/ProjectsPage.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/projects',
            component: ProjectsPage,
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
