<template>
    <div class="home">

        <button @click="visible=true">TABLE</button>
        |
        <button @click="visible=false">GRID</button>
        <br><br><br>
        <div style="flex-direction: row; display: flex">
            <div @click="this.$router.push('/add')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
            </div>
            <div @click="this.$router.push('/trash')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
            </div>
        </div>
        <br>
        <div v-if="visible">
            <table>
                <tr>
                    <th>Selected</th>
                    <th> Id</th>
                    <th> Title</th>
                    <th> Description</th>
                    <th> Price</th>
                    <th></th>
                </tr>
                <tr v-for="post in posts" :key="post.id">
                    <td>
                        <div v-if="!this.selected.find(item=>item.id===post.id)" @click="this.selected.push(post)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle fill="#010101" cx="12" cy="12" r="8"/>
                            </svg>
                        </div>
                        <div v-else @click="deleteSelect(post.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                    </td>
                    <td>{{post.id}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.description}}</td>
                    <td>{{post.price}}</td>

                    <td>
                        <div style="flex-direction: row; display: flex">
                            <div v-if="!this.$store.state.favoritesPosts.find(item=>item.id===post.id)"
                                 @click="this.$store.commit('addFavoritPost',post)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0H24V24H0z"/>
                                    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"/>
                                </svg>
                            </div>

                            <div v-else @click="this.$store.commit('deleteFavoritePost',post.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0H24V24H0z"/>
                                    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/>
                                </svg>
                            </div>


                            <div @click=" this.$router.push(`/posts/${post.id}`)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                </svg>
                            </div>

                            <div @click="this.$store.dispatch('deletePost',post)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <br>
            <button @click="this.$store.commit('deleteSelectedPosts',this.selected)">Delete</button>
            <button @click="this.$store.commit('deletePosts')">Delete all</button>
        </div>


        <div v-else class="grid-container">
            <div class="grid-item" v-for="post in posts" :key="post.id">
                <p>{{post.id}}</p>
                <p>{{post.title}}</p>
                <p>{{post.description}}</p>
                <p>{{post.price}}</p>
                <div v-if="!this.$store.state.favoritesPosts.find(item=>item.id===post.id)"
                     @click="this.$store.commit('addFavoritPost',post)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0H24V24H0z"/>
                        <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"/>
                    </svg>
                </div>
                <div v-else @click="this.$store.commit('deleteFavoritePost',post.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0H24V24H0z"/>
                        <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                visible: true,
                selected: []
            }
        },
        methods: {
            deleteSelect(id) {
                let postIndex = this.selected.findIndex(item => item.id === id);
                console.log(postIndex)
                this.selected.splice(postIndex, 1)
            }
        },
        computed: {
            posts() {
                return this.$store.state.posts
            }
        },
        mounted() {
            if (!this.$store.state.posts.length)
                this.$store.dispatch('getPosts')
        }
    }
</script>
<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #ebecf3;
        padding: 5px;
    }

    .grid-item {
        background-color: rgba(219, 225, 236, 0.8);
        border: 1px solid rgba(252, 248, 248, 0.8);
        padding: 20px;
        font-size: 20px;
        text-align: center;
    }

    button {
        background-color: #03175f;
        border: none;
        color: white;
        padding: 10px 18px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        outline: none;
    }
</style>