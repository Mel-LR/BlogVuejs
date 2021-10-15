<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Nemo alias sapiente corrupti molestias, consequuntur tempora 
      suscipit nihil sed doloremque omnis illum quibusdam ea voluptatum 
      nisi atque ex quam necessitatibus laborum.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutWorld',
  props: {
    msg: String
  }
}
</script>