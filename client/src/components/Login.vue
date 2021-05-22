<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert colored color="deep-purple accent-3" elevation="2" dark>
          <h2>Login : Hello my friend :)</h2>
          <div v-html="error" class="error">login error : {{ this.error }}</div>
          {{ msg }}
        </v-alert>

        <form>
          <v-text-field
            v-modle="email"
            :error-messages="emailErrors"
            label="email"
            type="email"
            name="email"
            id="email"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            hint="At least 8 characters"
            counter
            type="password"
            name="password"
            id="password"
            label="password"
            required
          >
          </v-text-field>
          <v-btn type="submit" @click="login">
            login
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
  <!-- <div class="register container">
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
  </div> -->
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`
      },
      show: null,
      msg: "login here"
    };
  },
  methods: {
    async login() {
      // console.log("ddddddd");
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log(response);

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.msg = "your logged in";
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.msg = "fall";
      }
    },
    clear() {
      this.$v.$reset();
      (this.email = ""), (this.password = "");
    }
  }
};
</script>

<style>
.error {
  color: orangered;
  font-size: 2rem;
}
</style>
