<template>
  <header>
    <!-- nav -->
    <nav>
      <div class="nav-wrapper indigo bg-darken-4">
        <router-link to="/" class="brand-logo">shiri studio</router-link>
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
            <router-link to="/register">register</router-link>
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
        <router-link to="/register">register</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
</style>