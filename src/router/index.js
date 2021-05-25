import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/post'
import addPost from "../views/addPost";
import trash from "../views/trash"
import Grid from "../views/Grid"


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/posts/:id',
        name: 'Post',
        component: Post,
        props: true
    },
    {
        path: '/favorit',
        name: 'Favorites',
        component: () => import( '../views/Favorites.vue')
    },
    {
        path: '/add',
        name: 'addPost',
        component: addPost
    },
    {
        path: '/trash',
        name: 'trash',
        component: trash
    },
    {
        path: '/grid',
        name: 'Grid',
        component: Grid
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
