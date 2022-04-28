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
          <v-btn type="submit" large class="mt-4 teal darken-2 white--text"
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
  data(){
      return{
          email:'',
          password:'',
      }
  },
  computed:{
      user(){
          return this.$store.getters.user
      }
  },
  watch:{
      user(value){
          if(value !== null && value !== undefined){
              this.$router.push("/")
          }
      }
  },
  methods:{
      onLogin(){
          this.$store.dispatch('loginUser',{email:this.email,password:this.password})
      }
  }
};
</script>

