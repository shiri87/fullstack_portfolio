<template>
  <div class="register container">
    <div class="row">
      <form class="col s12 12 offset-14">
        <div class="card-panel deep-purple lighten-2 white-text">
          <div class="msg">Login : Hello my friend :)</div>
          <div v-html="error" class="error mt-3">
            login error : {{ this.error }}
          </div>
        </div>
        <div class="card">
          <div class="card-action">
            <div class="form-field">
              <label for="email">Your Email</label>
              <input type="email" name="email" id="email" v-model="email" />
            </div>
            <div class="form-field">
              <label for="password">Your Password</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
              />
            </div>
            <div class="form-field center-align">
              <button
                class="btn-large deep-purple"
                type="submit"
                @click="login"
              >
                login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      email: "test@gmail.com",
      password: "password0000",
      error: null,
    };
  },
  methods: {
    async login() {
      // console.log("ddddddd");
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        console.log(response);

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
.error {
  color: orangered;
  font-size: 2rem;
}
</style>