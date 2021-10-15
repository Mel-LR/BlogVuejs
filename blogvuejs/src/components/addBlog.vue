<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form>
            <!-- Title -->
            <label>Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <!-- Content -->
            <label>Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>

            <!-- Checkboxes -->
            <div id="checkboxes">
                <label>Programming</label>
                <input type="checkbox" value="Programming" v-model="blog.categories"/>
                <label>Food</label>
                <input type="checkbox" value="Food" v-model="blog.categories"/>
                <label>Sport</label>
                <input type="checkbox" value="Sport" v-model="blog.categories"/>
                <label>Movies</label>
                <input type="checkbox" value="Movies" v-model="blog.categories"/>
                <label>Video Games</label>
                <input type="checkbox" value="Video Games" v-model="blog.categories"/>
                <label>Health</label>
                <input type="checkbox" value="Health" v-model="blog.categories"/>
                <label>School</label>
                <input type="checkbox" value="School" v-model="blog.categories"/>
                <label>News</label>
                <input type="checkbox" value="News" v-model="blog.categories"/>
            </div>

            <!-- Author -->
            <label>Author:</label>
            <input type="text" v-model.lazy="blog.author" required />
        </form>

        <!-- Preview of the blog content -->
        <div class="preview">
            <h3>Preview Blog</h3>
                <p class="preview-padding"><strong>Title:</strong> {{blog.title}}</p>
                <p class="preview-padding"><strong>Content:</strong></p>
                <p class="preview-padding">{{blog.content}}</p>
                <p class="preview-padding"><strong>Categories:</strong></p>
            <ul>
                <li class="preview-padding" v-for="category in blog.categories" v-bind:key="category.id">- {{ category }}</li>
            </ul>
            <p class="preview-padding"><strong>Author:</strong> {{blog.author}}</p>
            <!-- Display date of creation -->
            <p class="preview-padding"><strong>Creation Date:</strong> {{currentDate()}}</p>
        </div>
            <!-- Button to clear the locaStorage and the inputs -->
            <button class="button" onclick="localStorage.clear(); window.location.reload();">Clear all</button>
            <p style="visibility: hidden;"> prefs : {{prefs}}</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            // Blog infos
            blog: {
                title:"",
                content:"",
                categories: [],
                author:"",
                date:"",
            },
            newBlog: '',
        }
    },

    
    methods: {
            addNewBlog() {
            console.log(this.newBlog)
        },
        
        // get current date
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            return date;
        }
    },
    // localStorage
    created: function () {
        var loaded = JSON.parse(localStorage.getItem('myPrefs'));

        if(loaded) {
            this.blog.title = loaded.storedTitle;
            this.blog.content = loaded.storedContent;
            this.blog.author = loaded.storedAuthor;
            this.blog.categories = loaded.storedCategories;
        }
    },

    computed: {
        prefs: function () {
            var p = {
                storedTitle : this.blog.title,
                storedContent : this.blog.content,
                storedAuthor : this.blog.author,
                storedCategories : this.blog.categories,
            };
            localStorage.setItem('myPrefs', JSON.stringify(p));
            return p;
        }
    }
    
}

</script>

<style>
#add-blog *{
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

.preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    white-space: pre-wrap;
    max-width: 100%;
}

.preview-padding {
    display: flex;
    justify-content: flex-start;
}

h3{
    margin-top: 10px;
}
.button {
  padding: 15px 25px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #757977;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #5b5f5b}

.button:active {
  background-color: #a7b6a7;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}

</style>