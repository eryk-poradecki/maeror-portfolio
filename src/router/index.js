import { createRouter, createWebHistory } from 'vue-router'
import GameDev from '../views/GameDev.vue'
import About from '../views/About.vue'
import Works from '../views/Works.vue'
import Music from '../views/Music.vue'
import SoundDesign from '../views/SoundDesign.vue'

const routes = [
    {
        path: '/portfolio/game_dev',
        name: 'game_dev',
        component: GameDev,
    },
    {
        path: '/portfolio/sound_design',
        name: 'sound_design',
        component: SoundDesign,
    },
    {
        path: '/portfolio/music',
        name: 'music',
        component: Music,
    },
    {
        path: '/portfolio/about',
        name: 'about',
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router