<template>
    <v-container class="text-center">
    <h1 class="teal darken-2 d-inline-block elevation-8 py-2 px-8 rounded my-8 white--text text-uppercase font-weight-bold">Join Our Awesome Meetup</h1>
    <v-carousel :continuous="true" class="my-12 rounded">
    <v-carousel-item
      v-for="(item,i) in meetups"
      :key="i"
      :src="item.imageUrl"
      reverse-transition="fade-transition"
      transition="fade-transition"
      
    ><h2 class="text-center teal darken-4 white--text text-uppercase font-weight-thin">{{item.title}}</h2></v-carousel-item>
  </v-carousel>
        <v-btn outlined large to="meetups" class="teal darken-2 white--text">Explore Meetups</v-btn>
        <v-btn outlined large to="createMeetup" class="teal darken-2 white--text ml-6">Organize Meetup</v-btn>
    </v-container>
</template>

<script>
    
   export default {
    name:'home-view',
    data () {
      return {
        user:this.$store.state.user.email,
      }
    },
    computed:{
        meetups(){
            return this.$store.getters.featuredMeetUp
        },
    }
  }
</script>

<style scoped>

</style>