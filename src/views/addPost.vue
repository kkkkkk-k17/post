<template>
    <div class="about">
        <form>
            <label>Id:</label><br>
            <input type="text" v-model="post.id"><br><br>
            <label>Title:</label><br>
            <input type="text" v-model="post.title"><br><br>
            <label>Description:</label><br>
            <textarea type="text" v-model="post.description" cols="30" rows="5"></textarea><br><br>
            <label>Price:</label><br>
            <input type="text" v-model="post.price"><br><br>
        </form>
        <button @click="this.$store.dispatch('addPost',post)">Add post</button>
    </div>
</template>
<script>
    export default {
        name: "addPost",
        data() {
            return {
                post: {
                    id: "",
                    title: "",
                    description: "",
                    price: "",
                },

            }
        }
    }
</script>