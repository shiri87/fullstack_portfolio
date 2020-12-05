<template>
 <v-container>
      <!-- colored-border -->
    <v-alert
      border="top"
      colored
      color="teal accent-3"
      elevation="2"
      dark
    >   <h1>
      <v-icon x-large>fas fa-address-book</v-icon>
    Hello! I am Shiri,<br/>please leave me a message.</h1>
      <v-btn
      color="white"
      class="ma-2 white--text">
              <router-link :to="'/guest/add'">
      <v-icon
        left
        dark
      >fas fa-id-badge
      </v-icon >add GUEST BOOK</router-link>
            </v-btn>
    </v-alert>
     <v-row>
      <v-col  
        v-for="guest in guests"
        :key="guest.id"
      class="d-flex child-flex"
      cols="4"> 
      <v-card
        max-width="400"
        class="mx-auto"
      >
          <v-img
              class="activator"
              :src="guest.photo"
              :alt="'guest.nickname' + 's photo'"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            />
        <v-card-title>
            {{ guest.nickname }}
          </v-card-title>
          <v-card-text class="text--primary">
          <small>Date : {{ guest.date }}</small>
          <p>{{ guest.msg }}</p>
        
        </v-card-text>
      </v-card>
      </v-col>
     </v-row>


      <!-- <div class="s12 m4"> -->
      <!-- <div
        class="card grey white-text hoverable"
        v-for="guest in guests"
        :key="guest.id"
      >
        <div class="card-content">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              :src="guest.photo"
              :alt="'guest.nickname' + 's photo'"
            />
          </div>
          <div class="card-title">
            {{ guest.nickname }}
          </div>

          <small>Date : {{ guest.date }}</small>
          <p>{{ guest.msg }}</p>
        </div> -->
  </v-container>
</template>

<script>
import GuestbookServices from "@/services/GuestbookServices";
export default {
  name: "guest",
  data: () => {
    return {
      guests: null,
    };
  },
  async mounted() {
    // guest guests / guestbook
    this.guests = (await GuestbookServices.getAllGuestbooks()).data;
  },
};
</script>

<style scoped>
</style>
