<template>
  <v-container>
    <div class="heading text-center">
      <h1
        class="
          teal
          darken-2
          d-inline-block
          elevation-8
          py-2
          px-8
          rounded
          my-10
          white--text
          text-uppercase
          font-weight-bold
        "
      >
        Explore Our Meetups
      </h1>
    </div>
    <v-row>
      <v-col v-for="item in meetUps" :key="item.id" md="10" offset-md="1" sm="12">
        <v-card elevation="6" class="mx-auto my-6">
          <v-img :src="item.imageUrl" height="400px"></v-img>

          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-subtitle class="pb-0">Time : {{item.time}} pm
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="teal lighten-2" text :to="`/meetups/${item.id}`">
              <v-icon class="pr-3">mdi-arrow-right-circle-outline</v-icon>
              View Meetup
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition >
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text class="teal darken-2 rounded white--text">
                {{ item.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "meetups-area",
  data: () => ({
    show: false,
    
  }),
  computed:{
    meetUps(){
      return this.$store.getters.loadedMeetups;
    }
  },
  methods: {

  },
};
</script>

<style  scoped>
</style>