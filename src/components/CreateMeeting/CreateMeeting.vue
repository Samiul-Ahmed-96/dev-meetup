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
        Create Meeting
      </h1>
    </div>

    <v-row>
      <v-col md="8" offset-md="2" sm="12">
        <form @submit.prevent="createMeeting">
          <div>
            <v-text-field
              class="mb-4"
              label="Title"
              hide-details="auto"
              v-model="title"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              class="mb-4"
              label="Location"
              hide-details="auto"
              v-model="location"
            ></v-text-field>
          </div>

          <div>
            <v-text-field
              class="mb-4"
              name="imageUrl"
              label="Image URL"
              id="image-url"
              v-model="imageUrl"
              required
            ></v-text-field>
          </div>
          <div>
            <img :src="imageUrl" height="150" class="rounded" />
          </div>
          <div>
            <v-textarea v-model="description" label="Description"></v-textarea>
          </div>
          <div>
            <v-row>
              <v-col lg="6" md="6" sm="12">
                <label for="date">Pick Date</label>
                <v-date-picker
                  v-model="date"
                  color="teal darken-2"
                  style="border:1px solid black; padding:10px"
                  :allowed-dates="allowedDates"
                  class="mt-4"
                ></v-date-picker>
              </v-col>
              <v-col lg="6" md="6" sm="12">
                <label for="time">Pick Time</label>
                <v-time-picker
                style="border:1px solid black; padding:3px"
                  v-model="time"
                  color="teal darken-2"
                  id="time"
                  class="mt-4"
                  format="ampm"
                ></v-time-picker>
              </v-col>
            </v-row>
          </div>
          <v-btn
            type="submit"
            :disabled="!isValidForm"
            large
            class="mt-4 teal darken-2 white--text"
            >Create Meeting</v-btn
          >
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      time: "",
      date: "",
    };
  },
  methods: {
    createMeeting() {
      // console.log('Title', this.title)
      // console.log('Location', this.location)
      // console.log('imageURL', this.imageUrl)
      // console.log('description', this.description)
      // console.log('time', this.time)
      // console.log('date', this.date)
      const meetUpdata = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        time: this.time,
        date: this.date,
      };
      this.$store.dispatch("createMeetup", meetUpdata);
      this.$router.push("/meetups");
    },
  },
  computed: {
    isValidForm() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageURL !== "" &&
        (this.description !== "") & (this.time !== "") &&
        this.date !== ""
      );
    },
  },
};
</script>

<style scoped>
form {
  border: 1px solid #004d40;
  padding: 20px;
  border-radius: 5px;
}
</style>