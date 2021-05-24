<template>
    <form v-if="post">
        <label>Id:</label><br>
        <input type="text" v-model="post.id" disabled><br><br>
        <label>Title:</label><br>
        <input type="text" v-model="post.title" :disabled="disabled"><br><br>
        <label>Description:</label><br>
        <input type="text" v-model="post.description" :disabled="disabled"><br><br>
        <label>Price:</label><br>
        <input type="text" v-model="post.price" :disabled="disabled"><br><br>
    </form>
    <button @click="disabled = false">Edit</button>
    <button @click="updatePost">Update</button>
</template>
<script>
    export default {
        data() {
            return {
                disabled: true,
                post: this.$store.state.posts.find((item) => item.id === +this.id),
            };
        },
        props: ["id"],
        name: "Post",
        watch: {
            "$store.state.posts"(posts) {
                console.log(this.$store.state.posts.find((item) => item.id === +this.id));
                if (posts.length) {
                    this.car = this.$store.state.posts.find((item) => item.id === +this.id)
                    console.log(this.car)
                }
            }
        },
        methods: {
            updatePost() {
                const data = {
                    id: this.id,
                    title: this.post.title,
                    description: this.post.description,
                    price: this.post.price
                }
                this.$store.dispatch('updatePost', data)
            }
        },
        mounted() {
            if (!this.$store.state.posts.length) {
                this.$store.dispatch("getPosts");
            }
        },
    }
</script>
