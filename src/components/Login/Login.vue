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
        Login Here
      </h1>
    </div>
    <v-row>
      <v-col md="8" sm="12" offset-md="2">
                <div v-if="error" class="errors">
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </div>
        <form @submit.prevent="onLogin">
          <div>
            <v-text-field
              class="mb-4"
              label="Email"
              type="email"
              hide-details="auto"
              v-model="email"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              class="mb-4"
              label="Password"
              type="password"
              hide-details="auto"
              v-model="password"
            ></v-text-field>
          </div>
          <!-- <v-btn  outlined text class="mt-8  teal--text d-block" to="/login" 
            >Already Register ?</v-btn
          > -->
          <v-btn
            type="submit"
            :loading="loading"
            :disabled="loading"
            @click="loader = 'loading'"
            large
            class="mt-4 teal darken-2 white--text"
            >Login</v-btn
          >
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login-area",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    },
    error(){
      return this.$store.getters.error
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    onLogin() {
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password,
      });
    },
    onDismissed() {
      console.log("Dismissed Alert");
      this.$store.dispatch("clearError");
    },
  },
};
</script>

