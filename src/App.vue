<template>
  <v-app id="inspire">

    <Header/>
    <v-main>
      <v-container class="mt-1" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Shared/Navbar.vue';
export default {
  name: "App",
  components:{
    Header,
  }
  
};
</script>

<style scoped></style>