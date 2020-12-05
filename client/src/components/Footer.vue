<template>
      <v-footer
    dark
    padless
  >
    <v-card
      flat
      class="deep-purple accent-2 white--text text-lighten-4 row center valign-wrapper"
    >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon class="mr-2" size="24px">fab fa-github</v-icon>
          <v-icon class="mr-2" size="24px">fab fa-codepen</v-icon>
          <v-icon class="mr-2" size="24px">fab fa-instagram</v-icon>
          <v-icon class="mr-2" size="24px">fas fa-envelope</v-icon>
          <v-icon class="mr-2" size="24px">fas fa-mobile-alt</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Fullstack project :  Vue | Vufify | Vueliadte | Node | Express | SQLite | Sequelize | Joi | jwtToken
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} <v-icon>fa fa-copyright</v-icon> <strong>Shiri Studio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>

</style>