<template>
  <v-container>
      <!-- colored-border -->
    <v-alert
      border="top"
      colored
      color="deep-purple accent-2"
      elevation="2"
      dark
    >   <h1>
      <v-icon x-large>fas fa-vials</v-icon>
    Welcome to Shiri studio Laboratory.</h1>
            <p>
              I am looking for new feature and trend of Web development.
              Anything you could recommened for me?
            </p>
            <v-btn  color="white"
      class="ma-2 white--text">
              <router-link :to="'/lab/add'">
      <v-icon
        left
        dark
      >
        fas fa-vial
      </v-icon >add project</router-link>
            </v-btn>
    </v-alert>
<!-- v-card -->
<!-- v-row or v-slide -->
  <!-- <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="labProject in labProjects"
       :key="labProject.id"
        v-slot="{ active, toggle }"
      > -->

<!-- 
  <v-card
  :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
            > -->
       <v-row>
      <v-col  v-for="labProject in labProjects"
       :key="labProject.id"
      class="d-flex child-flex"
      cols="6"
    >
  <v-card
    class="mx-auto"
    max-width="800"
    
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="labProject.photo"
      :alt="'labProject.project' + 's photo'"
    >
      <v-card-title ><v-btn color="deep-purple" large dark
>{{ labProject.project }}</v-btn></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      <div>{{ labProject.description }}</div>
     </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Category_{{ labProject.category }}</div>
      <div>Tags : {{ labProject.tags }}</div>

      <div>version : {{ labProject.version }}</div>
    </v-card-text>

    <v-card-actions>
             <hr />
      <v-btn
      color="deep-purple accent-2"
      outlined

      >
      <router-link
        :to="'/lab/' + labProject.id"
        >detail</router-link
      > <v-icon right>fas fa-microscope</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card></v-col>
  </v-row>
        <!-- </v-slide-item>
    </v-slide-group>
  </v-sheet> -->
     </v-container>
</template>

<script>
import LabProjectsServices from "@/services/LabProjectsServices";
export default {
  name: "lab",
  data: () => {
    return {
      labProjects: null,
            model: null,

    };
  },
  async mounted() {
    this.labProjects = (await LabProjectsServices.getAllLabProjects()).data;
  },
  // watch:{
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
