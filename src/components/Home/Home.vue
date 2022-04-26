<template>
    <v-container class="text-center">
    <h1 class="teal darken-4 d-inline-block elevation-8 py-2 px-8 rounded my-8 white--text text-uppercase font-weight-bold">Join Our Awesome Meetup</h1>
    <v-carousel class="my-12 rounded">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      
    ><h2 class="text-center teal darken-4 white--text text-uppercase font-weight-thin">{{item.name}}</h2></v-carousel-item>
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
            name:'New York City',
            id:'123123123423452',
            src: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            name:'Tokyo Japan',
            id:'1231231232343452',
            src: 'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            name:'Netherlands',
            id:'123123123423452',
            src: 'https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
         
        ],
      }
    },
  }
</script>

<style scoped>

</style>