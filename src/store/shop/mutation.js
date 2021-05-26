import router from "../../router";

const mutations = {
    addInShoppingCard(state,post){
     state.shoppingCard.push(post)
    },
    deleteShoppingCard(state,id){
        let postIndex = state.shoppingCard.findIndex(item => item.id === id);
        console.log(postIndex)
        state.shoppingCard.splice(postIndex, 1)
    },
    deleteFavoritePost(state, id) {
        let postIndex = state.favoritesPosts.findIndex(item => item.id === id);
        console.log(postIndex)
        state.favoritesPosts.splice(postIndex, 1)
    },
    deleteTrash(state,id){
        let postIndex = state.trash.findIndex(item => item.id === id);
        console.log(postIndex)
        state.trash.splice(postIndex, 1)
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
        let postIndex = state.trash.findIndex(item => item.id === post.id);
        console.log(postIndex)
        state.trash.splice(postIndex, 1)
    }
};
export default mutations