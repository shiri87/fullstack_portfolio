<template>
  <header>
   <!-- <v-toolbar flat dense dark > -->
    <v-toolbar flat dense dark color="deep-purple">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="nav"
        ><router-link to="/" class="brand-logo">
          <img src="../assets/logo-w.svg" alt="Shiri Studio Logo" />
        </router-link>
      </v-toolbar-side-icon>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="nav-sm"
        ><router-link to="/" class="brand-logo">
          <img src="../assets/logo-s.svg" alt="Shiri Studio Logo"
        /></router-link>
      </v-toolbar-side-icon>
      <!-- <v-toolbar-title></v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text class='nav-sm-link'> <router-link to="/">Home</router-link></v-btn>
        <v-btn text class='nav-sm-link'> <router-link to="/about">About</router-link> </v-btn>
        <v-btn text class='nav-sm-link'> <router-link to="/project">Project</router-link> </v-btn>
        <v-btn text class='nav-sm-link'> <router-link to="/lab">Lab</router-link> </v-btn>
        <v-btn text class='nav-sm-link'> <router-link to="/guest">GuestBook</router-link> </v-btn>

        <v-btn>
          <router-link v-if="!$store.state.isUserLoggedIn" to="/login"
            >Login</router-link
          >
        </v-btn>

        <v-btn text>
          <router-link v-if="!$store.state.isUserLoggedIn" to="/register"
            >Register</router-link
          >
        </v-btn>

        <v-btn text>
          <router-link v-if="$store.state.isUserLoggedIn" @click="logout"
            >Logout</router-link
          >
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width="200"
      id="drawer"
    >
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      //take to home
      this.$store.push({ name: "root" });
    }
  }
};
</script>

<style>
header a {
  background-color: blueviolet;
  color: #fff;
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  .nav {
    display: none;
  }
}
@media only screen and (min-width: 601px) {
  .nav-sm {
    display: none;
  }
  .nav-sm-link{
    padding:0 }
}
</style>
