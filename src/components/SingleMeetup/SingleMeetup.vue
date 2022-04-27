<template>
  <v-container>
    <v-row>
      <v-col md="12" lg="12" sm="12">
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
        {{meetUp.title}}
      </h1>
        <v-card class="mx-auto teal darken-2 white--text">
          <v-img
            class="white--text align-end"
            height="50vh"
            :src="meetUp.imageUrl"
          >
            <v-card-title>{{meetUp.name}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-4 white--text">ID: {{meetUp.id}} </v-card-subtitle>

          <v-card-text>
            <h2 class="white--text font-weight-regular">{{meetUp.description}}</h2>
          </v-card-text>
          <v-card-text>
            <h2 class="white--text font-weight-regular">Meetup date : {{meetUp.date}}</h2>
          </v-card-text>

          <v-card-actions>
            <v-btn color="white" class="py-2 px-5 ml-2 mb-2" large outlined> Register </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "single-meetup",
  props:['id'],
  computed:{
      meetUp(){
          return this.$store.getters.loadedMeetup(this.id);
      }
  }
};
</script>

<style lang="scss" scoped>
</style>