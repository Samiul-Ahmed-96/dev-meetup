<template>
    <nav>
    <v-app-bar app dark absolute color="teal darken-4" class="px-14">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="//hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          DevMeetup
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}</v-btn
        >
      </v-toolbar-items>

    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" fixed temporary class="teal darken-4">
      <v-list shaped>
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            router
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name:'Nav-area',data: () => ({
    drawer: false,
    group: null,
    selectedItem: 1,
  }),
  computed: {
    menuItems() {
      let menuItems = [
        {
          title: "All Meetups",
          icon: "mdi-account-supervisor",
          link: "/meetups",
        },
        {
          title: "Create meeting",
          icon: "mdi-google-classroom",
          link: "/meetup/create",
        },
        { title: "Profile", icon: "mdi-account-circle", link: "/profile" },
        { title: "Register", icon: "mdi-account-plus", link: "/register" },
        { title: "Login", icon: "mdi-login", link: "/login" },
      ];
      return menuItems;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
        
    }
</script>

<style lang="scss" scoped>

</style>