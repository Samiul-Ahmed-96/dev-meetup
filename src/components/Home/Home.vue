<template>
    <v-container>
    <v-carousel class="my-12 rounded">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>
        <v-btn outlined large to="meetups" class="teal darken-4 white--text">Explore Meetups</v-btn>
        <v-btn outlined large to="meetup/new" class="teal darken-4 white--text ml-6">Organize Meetup</v-btn>
    </v-container>
</template>

<script>
    
   export default {
    name:'home-view',
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

<style scoped>

</style>