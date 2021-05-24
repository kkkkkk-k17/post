import {createStore} from 'vuex'
import axios from "axios"
import router from '../router/index.js'

const store = createStore({
    state() {
        return {
            posts: [],
            favoritesPosts: [],
            trash: []
        }
    },
    mutations: {
        deleteFavoritePost(state, id) {
            let postIndex = state.favoritesPosts.findIndex(item => item.id === id);
            console.log(postIndex)
            state.favoritesPosts.splice(postIndex, 1)
        },
        addFavoritPost(state, post) {
            state.favoritesPosts.push(post)
        },
        deletePosts(state) {
            state.posts.splice(0)
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        updatePost(state, data) {
            let postIndex = state.posts.findIndex(item => item.id === +data.id);
            state.posts.splice(postIndex, 1, {
                ...state.posts[postIndex]
            })
            router.push('/')
            console.log(state.posts)
        },
        deletePost(state, post) {
            let postIndex = state.posts.findIndex(item => item.id === post.id);
            state.posts.splice(postIndex, 1)
            state.trash.push(post)
            console.log(state.trash)
        },
        deleteSelectedPosts(state, selected) {
            selected.forEach((element) => {
                let postIndex = state.posts.findIndex(item => item.id === element.id);
                state.posts.splice(postIndex, 1)
                state.trash.push(element)
                console.log(element)
            })
        },
        addPost(state, post) {
            state.posts.splice(0, 0, post)
            router.push('/')
        }
    },
    actions: {
        getPosts({commit}) {
            console.log(this.state.users)
            axios({
                method: "get",
                url: "http://localhost:5000/api/v1/products",
                data: this.state.posts
            })
                .then((response) => {
                    commit("setPosts", response.data.todos)
                    console.log(response)
                })
                .catch(error => console.log(error))
        },
        updatePost({commit}, data) {
            axios.put(`http://localhost:5000/api/v1/products/${data.id}`, data)
                .then((response) => {
                    console.log(response.data)
                    const user = {
                        name: response.data.name,
                        id: data.id
                    }
                    commit("updatePost", user)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addPost({commit}, post) {
            axios.post('http://localhost:5000/api/v1/products', post)
                .then((response) => {
                    console.log(response.data)
                    commit("addPost", post)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deletePost({commit}, post) {
            axios.delete(`http://localhost:5000/api/v1/products/${post.id}`, post)
                .then((response) => {
                    console.log(response)
                    commit("deletePost", post)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // deletePosts({commit},selected)
        // {
        //     selected.forEach((element) => {
        //         axios.delete(`http://localhost:5000/api/v1/products/${element.id}`,element)
        //             .then((response) => {
        //                 console.log(response)
        //                 commit("deletePost",element)
        //                 router.push("/")
        //             })
        //             .catch((error) => {
        //                 console.log(error);
        //             });
        //     })
        // }
    }
})
export default store