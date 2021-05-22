<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert colored color="teal lighten-2" elevation="2" dark>
          <h2>Register : Are you willing to test?</h2>
          <div v-html="error" class="error">Error _ try again</div>
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
          <v-btn type="submit" @click="register">
            Register
          </v-btn>

          <v-btn @click="clear">
            clear
          </v-btn>
        </form>
      </v-col>
    </v-row>
    <!-- <div class="row">
      <form class="col s12 12 offset-14">
        <div class="card-panel teal lighten-2 white-text">
          <div class="msg">Register : Are you willing to test?</div>
          <div v-html="error" class="error">Error _ try again</div> -->
    <!-- Errors display div-->
    <!-- </div>
        <div class="card">
          <div class="card-action">
            <div class="form-field">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" v-model="email" />
            </div>
            <div class="form-field">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
              />
            </div>
            <div class="form-field center-align">
              <button class="btn-large teal" type="submit" @click="register">
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div> -->
  </v-container>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "register",
  data() {
    return {
      email: "shiri@studio.com",
      password: "password0000",
      error: null,
      msg: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`
      },
      show: null
    };
  },
  methods: {
    async register() {
      console.log("dgfydrftghdftghdgfhcdgf");
      try {
        console.log(this.email);
        console.log(this.password);
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        // this.$router.go("/");
        // this.$router.push({ name: "lab" });
        //axios -->  property called data
        console.log(response.data);
        this.msg = "You are signed in now!";
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.msg = "Fall";
      }
    },
    clear() {
      this.$v.$reset();
      (this.email = ""), (this.password = "");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: orangered;
  font-size: 2rem;
}
</style>
