<template>
    <div class="about">
        <h1>Trash</h1>
        <div class="grid-container">
            <div class="grid-item" v-for="post in this.$store.state.trash" :key="post.id">
                <p>{{post.id}}</p>
                <p>{{post.title}}</p>
                <p>{{post.description}}</p>
                <p>{{post.price}}</p>
                <button @click="this.$store.commit('deleteTrash',post.id)">Delete</button>
                <button @click="this.$store.dispatch('addPost',post)">Restore</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'trash'
    }
</script>
<style>

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
</style>