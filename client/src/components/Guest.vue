<template>
  <div class="container">
    <div class="row">
      <form class="col m12 s12">
        <div class="card-panel deep-purple lighten-2 white-text">
          <div class="msg">
            Hi I am shiri, please leave your message
            <button class="btn grey lighten-3 black-text">Click to Add</button>
          </div>
        </div>
      </form>
    </div>

    <div class="cards-container">
      <!-- <div class="s12 m4"> -->
      <div
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
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
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
