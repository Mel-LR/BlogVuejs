<template>
  <div class="singlePost">
    <SinglePost/>
  </div>
</template>

<script>
// @ is an alias to /src
import SinglePost from '@/components/SinglePost.vue'

export default {
  name: 'Post',
  components: {
    SinglePost
  }
}
</script>