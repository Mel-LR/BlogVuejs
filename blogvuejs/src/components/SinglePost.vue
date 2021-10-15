<template>
    <div class="container pb50">
        <div class="row">
            <div class="col-md-12 mb40"><br/><br/> 
                <article>
                    <img :src="posts[$route.params.id].urlToImage" alt="image" style="width: 700px;"> <br/><br/>                  
                    <div class="post-content">
                        <h3>{{posts[$route.params.id].title}}</h3>
                        <ul class="post-meta list-inline">
                            <li class="list-inline-item">
                                <i class="fa fa-user-circle-o">{{posts[$route.params.id].author}}</i>
                            </li>
                            <li class="list-inline-item">
                                <i class="fa fa-calendar-o">{{posts[$route.params.id].publishedAt}}</i> 
                            </li>
                            <li class="list-inline-item">
                                <i class="fa fa-tags">{{posts[$route.params.id].source.name}}</i>
                            </li>
                        </ul><br/><br/> 
                        <p>{{posts[$route.params.id].description}}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro alias velit exercitationem adipisci amet, magni nulla ipsum. 
                            Provident, numquam repudiandae! Sapiente nulla doloremque, eveniet 
                            facilis quia veniam fugit eaque voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro alias velit exercitationem adipisci amet, magni nulla ipsum. 
                            Provident, numquam repudiandae! Sapiente nulla doloremque, eveniet 
                            facilis quia veniam fugit eaque voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro alias velit exercitationem adipisci amet, magni nulla ipsum. 
                            Provident, numquam repudiandae! Sapiente nulla doloremque, eveniet 
                            facilis quia veniam fugit eaque voluptas.</p>
                        
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'SinglePost',
  computed: {    
    posts () {      
      // Récupère le getter taches du module taches      
      return this.$store.getters['posts']
      } 
   }
}
</script>