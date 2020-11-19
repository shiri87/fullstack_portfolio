<template>
  <div class="container">
    <div class="row">
      <form class="col m12 s12">
        <div class="card-panel deep-purple lighten-2 white-text">
          <div class="msg">
            <h1>Welcome to Shiri studio Laboratory.</h1>
            <p>
              I am looking for new feature and trend of Web development.
              Anything you could recommened for me?
            </p>
            <div class="btn grey lighten-3 black-text">
              <router-link :to="'/lab/add'">add project</router-link>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- mapping card -->
    <div class="card-contener">
      <div
        class="hoverable"
        v-for="labProject in labProjects"
        :key="labProject.id"
      >
        <div class="card">
          <div class="card-content row">
            <div class="col m6 s12">
              <div class="card-image waves-effect waves-block waves-light">
                <img
                  class="activator"
                  :src="labProject.photo"
                  :alt="'labProject.project' + 's photo'"
                  width=""
                />
              </div>
            </div>
            <div class="col m6 s12">
              <div class="card-title">
                {{ labProject.project }}
              </div>
              <p>{{ labProject.category }}</p>

              <small>Tags : {{ labProject.tags }}</small>
              <p>{{ labProject.description }}</p>
              <small>version : {{ labProject.version }}</small>
              <div class="btn btn-float deep-purple">detail</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabProjectsServices from "@/services/LabProjectsServices";
export default {
  name: "lab",
  data: () => {
    return {
      labProjects: null,
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
