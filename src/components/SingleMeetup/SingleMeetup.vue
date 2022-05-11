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
          {{ meetUp.title }}
        </h1>
        <v-card class="mx-auto teal darken-2 white--text">
          <v-img
            class="white--text align-end"
            height="50vh"
            :src="meetUp.imageUrl"
          >
            <v-card-title>{{ meetUp.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-4 white--text"
            >ID: {{ meetUp.id }}
          </v-card-subtitle>

          <v-card-text>
            <h2 class="white--text font-weight-regular">
              {{ meetUp.description }}
            </h2>
          </v-card-text>
          <v-card-text>
            <h2 class="white--text font-weight-regular">
              Meetup date : {{ meetUp.date }}
            </h2>
          </v-card-text>

          <v-card-actions>
            <v-btn color="white" class="py-2 px-5 ml-2 mb-2" large outlined>
              Register
            </v-btn>
            <template v-if="true">
              <v-spacer></v-spacer>
              <div>
                <v-col cols="auto">
                  <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="600"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="teal darken" v-bind="attrs" v-on="on"
                        ><v-icon color="white">mdi-pencil</v-icon></v-btn
                      >
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-toolbar color="teal darken-2" dark>></v-toolbar>
                        <v-card-text>
                          <div class="text-h2 pa-12">
                            <form @submit.prevent="createMeeting">
                              <div>
                                <v-text-field
                                  class="mb-4"
                                  label="Title"
                                  hide-details="auto"
                                  v-model="meetUp.title"
                                ></v-text-field>
                              </div>
                              <div>
                                <v-text-field
                                  class="mb-4"
                                  label="Location"
                                  hide-details="auto"
                                  v-model="meetUp.location"
                                ></v-text-field>
                              </div>

                              <div>
                                <v-text-field
                                  class="mb-4"
                                  name="imageUrl"
                                  label="Image URL"
                                  id="image-url"
                                  v-model="meetUp.imageUrl"
                                  required
                                ></v-text-field>
                              </div>
                              <div>
                                <img
                                  :src="meetUp.imageUrl"
                                  height="150"
                                  class="rounded"
                                />
                              </div>
                              <div>
                                <v-textarea
                                  v-model="meetUp.description"
                                  label="Description"
                                ></v-textarea>
                              </div>

                              <v-btn
                                type="submit"
                                large
                                class="mt-4 teal darken-2 white--text"
                                >Update Meeting</v-btn
                              >
                            </form>
                          </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false"
                            >Close</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </div>
            </template>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "single-meetup",
  props: ["id"],
  computed: {
    meetUp() {
      return this.$store.getters.loadedMeetup(this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>