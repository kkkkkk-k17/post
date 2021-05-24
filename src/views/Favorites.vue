<template>
  <div class="about">
    <h1>Favorites</h1>

    <div class="grid-container">
      <div class="grid-item" v-for="post in $store.state.favoritesPosts" :key="post.id">
        <p>{{post.id}}</p>
        <p>{{post.title}}</p>
        <p>{{post.description}}</p>
        <p>{{post.price}}</p>
        <button @click="$store.commit('deleteFavoritePost',post.id)">Delete</button>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Favorites',

    mounted() {
      console.log(this.$store.state.favoritesPosts)

    },
  }

</script>
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item {
    flex: 1 1 100%;
    height: 35vh;

    margin-left: 2px;
    margin-right: 2px;
    margin-bottom: 4px;

    background-color: #f7f6fd;
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
</style>