import axios from "axios"

const actions = {
    getPosts({commit}) {
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
};
export default actions