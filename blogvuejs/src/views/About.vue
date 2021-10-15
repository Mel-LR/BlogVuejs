<template>
  <div class="about">
    <AboutWorld msg="Information Blog"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutWorld from '@/components/AboutWorld.vue'

export default {
  name: 'About',
  components: {
    AboutWorld
  }
}
</script>