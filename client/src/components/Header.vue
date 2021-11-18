<template>
  <header class="navbar-fixed">
    <!-- nav -->
    <nav>
      <div class="nav-wrapper deep-purple accent-2">
        <router-link to="/" class="brand-logo">
          <img
            class="hide-on-large-only show-on-medium-and-down"
            src="../assets/logo-s.png"
            alt="Shiri Studio Logo"
        /></router-link>

        <router-link to="/" class="brand-logo"
          ><img
            class="show-on-large hide-on-med-and-down"
            src="../assets/logo-w.png"
            alt="Shiri Studio Logo"
          />
        </router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="fas fa-bars"></i
        ></a>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li><router-link to="/project">Project</router-link></li>
          <li><router-link to="/lab">Lab</router-link></li>
          <li><router-link to="/guest">GuestBook</router-link></li>
          <li>
            <router-link
              v-if="!$store.state.isUserLoggedIn"
              to="/login"
              class="btn grey mr-2"
              >Login</router-link
            >

            <router-link
              v-if="!$store.state.isUserLoggedIn"
              to="/register"
              class="btn"
              >Register</router-link
            >

            <router-link
              v-if="$store.state.isUserLoggedIn"
              class="btn"
              @click="logout"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li><router-link to="/project">Project</router-link></li>
      <li><router-link to="/lab">Lab</router-link></li>
      <li><router-link to="/guest">GuestBook</router-link></li>
      <li>
        <router-link
          v-if="!$store.state.isUserLoggedIn"
          to="/login"
          class="btn grey mr-2"
          >Login</router-link
        >

        <router-link
          v-if="!$store.state.isUserLoggedIn"
          to="/register"
          class="btn"
          >Register</router-link
        >
      </li>
      <button v-if="$store.state.isUserLoggedIn" class="btn" @click="logout">
        Logout
      </button>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      //take to home
      this.$store.push({ name: "root" });
    },
  },
};
</script>

<style>
</style>