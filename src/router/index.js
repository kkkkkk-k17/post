import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/post'
import addPost from "../views/addPost";
import trash from "../views/trash"

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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Favorites.vue')
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
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
