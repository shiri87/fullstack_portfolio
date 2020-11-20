<template>
  <div class="detail container">
    <h1>Lab Project detail</h1>
    <div v-if="labProject">
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
            <h1>{{ labProject.project }}</h1>
            <p>{{ labProject.category }}</p>

            <p>Tags : {{ labProject.tags }}</p>
            <p>{{ labProject.description }}</p>
            <p>version : {{ labProject.version }}</p>
            <hr />
            <router-link
              :to="'/lab/' + labProject.id + '/edit'"
              class="btn btn-float mr-1 info"
              >edit</router-link
            >
            <router-link :to="'/lab/' + labProject.id" class="btn btn-float red"
              >delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabProjectsServices from "@/services/LabProjectsServices";

export default {
  name: "LabDetail",
  data() {
    return {
      labProject: null,
    };
  },
  async mounted() {
    //   :to="'/' + labProject.id"
    //   { path: "/lab/:labProjectId",
    //   name: "LabDetail",
    //   component: LabDetail, },
    const labProjectId = this.$store.state.route.params.labProjectId;
    this.labProject = (
      await LabProjectsServices.getLabProjectById(labProjectId)
    ).data;
  },
};
</script>




<style>
</style>