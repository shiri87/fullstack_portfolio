<template>
    <v-container>
      <!-- <v-parallax> </v-parallax> -->
    <h1>Hello world, I am Shiri.</h1>
    <h4>
      I am a newb programmer Mebourne-based.<br />
      Also I am a expieced designer.
      <br />
      I seek to create some incredible projects with you.
    </h4>
    <img
      id="mainImg"
      src="../assets/shiri_laptop.png"
      alt="Shiri Avata"
      class="responsive-img"
      width="400rem"
    />  
    </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data () {
  return {
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
