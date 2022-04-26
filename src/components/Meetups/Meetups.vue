<template>
  <v-container>
    <div class="heading text-center">
      <h1
        class="
          teal
          darken-4
          d-inline-block
          elevation-8
          py-2
          px-8
          rounded
          my-8
          white--text
          text-uppercase
          font-weight-bold
        "
      >
        Explore Our Meetups
      </h1>
    </div>
    <v-row>
      <v-col md="6" offset-md="3" sm="12">
        <v-card elevation="6" class="mx-auto my-6" max-width="768">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
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
};
</script>

<style  scoped>
</style>