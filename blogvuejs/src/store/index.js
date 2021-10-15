import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [

    ]
  },
  getters: {  
    posts: function (state) {    
      return state.posts  
    }
  },
  methods: {
    async fetchData() {
      this.user = await Promise.resolve({ id: this.$route.posts.id });
    }
  },
  mutations: {
    getApiData(state){
      axios.get('http://api.fakecompany.life:30002/news')
      .then(result =>{
        console.log(result.data);
        result.data.forEach(pots => {
          state.posts.push(pots)
        });
        console.log(state.posts);
      })
    },
    addTodo(state, data) {
      state.posts.push(data)
    },
    removeTodoByIndex(state, index) {
      state.posts.splice(index, 1)
    },
  },
  actions: {
    removeTodoByID(context, id) {
      id = parseInt(id)
      const index = context.state.posts.findIndex((todo) => { return todo.id == id })
      context.commit('removeTodoByIndex', index)
    }
  },
  modules: {
  },
})
