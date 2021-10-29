import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import DemosPage from './components/DemosPage.vue'
import MapPage from '@/components/map/MapPage'
import MediumArticlesPage from '@/components/medium/MediumArticlesPage'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/projects',
            component: ProjectsPage,
        },
        {
            path: '/demos/map',
            component: MapPage,
        },
        {
            path: '/mediumarticles',
            component: MediumArticlesPage,
        },
        {
            path: '/demos',
            component: DemosPage,
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
