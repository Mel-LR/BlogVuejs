<template>
<div class="hello">
  <div class="container">
    <div class="row mb-2">
      <div class="col-md-6" v-for="(post,index) in posts" :key="index">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">{{ post.source.name }}</strong>
            <img :src="post.urlToImage" alt="image">
            <h3 class="mb-0">{{ post.author }}</h3>
            <div class="mb-1 text-muted">{{ post.publishedAt }}</div>
            <p class="card-text mb-auto">{{ post.content }}</p>
            <router-link :to="{path: '/post/'+(post.id-1)}">Lire +</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }, 
  computed: {    
    posts () {      
      // Récupère le getter taches du module taches      
      return this.$store.getters['posts']
      } 
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
