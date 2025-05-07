import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import GameDev from '../views/GameDev.vue'
import About from '../views/About.vue'
import Music from '../views/Music.vue'
import SoundDesign from '../views/SoundDesign.vue'

const routes = [
    {
        path: '',
        redirect: '/about',
    },
    {
        path: '/game_dev',
        name: 'game_dev',
        component: GameDev,
    },
    {
        path: '/sound_design',
        name: 'sound_design',
        component: SoundDesign,
    },
    {
        path: '/music',
        name: 'music',
        component: Music,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router