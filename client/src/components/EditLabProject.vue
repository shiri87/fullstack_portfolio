

<template>
  <!-- v-model="labProject.project" -->
  <!-- top msg from host -->
  <div class="add container deep-purple-text">
    <div class="card-panel deep-purple lighten-2 white-text">
      <div class="msg">
        <h1>Welcome to Shiri studio Laboratory.</h1>
        <p>You Can Edit this 'lab project'</p>
        <div class="btn rad mr-1">{{ message }}</div>
        <div class="btn grey lighten-3 deep-purple-text">
          <router-link to="/lab">back to lab project list</router-link>
        </div>
      </div>
    </div>
    <!-- form -->
    <!--v-model - Binds the data to the validator -->
    <!--:state - Stores the logic that checks if the field data is valid -->

    <form action="">
      <div class="white deep-purple-text text-darken-4">
        <!-- input project -->
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <!-- v-model="$v.labProject.project.$"
                  :state="
                    $v.labProject.project.$dirty
                      ? !$v.labProject.project.$error
                      : null
                  " -->
                <input
                  id="project"
                  type="text"
                  class="validate"
                  v-model="labProject.project"
                  aria-describedby="project-feedback"
                />
                <p id="project-feedback">
                  the project name is required | minimum length 3
                </p>

                <label for="project">Enter the name of your Project</label>
              </div>
              <div class="input-field col s6">
                <!-- v-model="$v.labProject.category.$"
                  :state="
                    $v.labProject.category.$dirty
                      ? !$v.labProject.category.$error
                      : null
                  " -->
                <input
                  id="category"
                  type="text"
                  class="validate"
                  v-model="labProject.category"
                  aria-describedby="category-feedback"
                />
                <p id="project-category">
                  the project category is required | minimum length 3
                </p>
                <label for="category"
                  >Enter project's category | Front-end, Back-end, Fullstack,
                  UI/UX, Data structure, etc
                </label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <!-- v-model="$v.labProject.tags.$"
                  :state="
                    $v.labProject.tags.$dirty
                      ? !$v.labProject.tags.$error
                      : null
                  " -->
                <input
                  id="tags"
                  type="text"
                  class="validate"
                  v-model="labProject.tags"
                  aria-describedby="tags-feedback"
                />
                <p id="tags-feedback">
                  the project tag is required | minimum length 3
                </p>
                <label for="tags"
                  >Enter tage of your project | #React #Vue #Vanilla js,
                  etc</label
                >
              </div>
              <div class="input-field col s6">
                <!-- v-model="$v.labProject.version.$"
                  :state="
                    $v.labProject.version.$dirty
                      ? !$v.labProject.version.$error
                      : null
                  " -->
                <input
                  id="version"
                  type="text"
                  class="validate"
                  v-model="labProject.version"
                  aria-describedby="version-feedback"
                />
                <p id="version-feedback">
                  the project version is required | minimum length 3
                </p>
                <label for="version"
                  >Enter project's version | 0.1.0 (Major.Minor.Patch)
                </label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <!-- v-model="$v.labProject.photo.$"
                  :state="
                    $v.labProject.photo.$dirty
                      ? !$v.labProject.photo.$error
                      : null
                  " -->
                <input
                  id="photo"
                  type="text"
                  class="validate"
                  v-model="labProject.photo"
                  aria-describedby="photo-feedback"
                />
                <p id="project-feedback">
                  the project photo is required | minimum length 3
                </p>
                <label for="photo"
                  >Enter project's photo | only src source can be attachec
                  :)</label
                >
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <!-- v-model="$v.labProject.description.$"
                  :state="
                    $v.labProject.description.$dirty
                      ? !$v.labProject.description.$error
                      : null
                  " -->
                <input
                  id="description"
                  type="text"
                  class="validate"
                  v-model="labProject.description"
                  aria-describedby="description-feedback"
                />
                <p id="description-feedback">
                  the project description is required | minimum length 3
                </p>
                <label for="description">Enter project's description </label>
              </div>
            </div>
          </form>
          <div
            @click.native="update"
            width="100"
            class="btn btn-large deep-purple"
          >
            Update
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LabProjectsServices from "@/services/LabProjectsServices";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "EditLabProject",
  data() {
    return {
      labProject: {
        project: null,
        category: null,
        tags: null,
        description: null,
        photo: null,
        version: null,
      },
      message: "not updated",
    };
  },
  mixins: [validationMixin],
  validations: {
    labProject: {
      project: { required, minLength: minLength(3) },
      category: { required, minLength: minLength(3) },
      tags: { required, minLength: minLength(3) },
      description: { required, minLength: minLength(5) },
      photo: { required, minLength: minLength(3) },
      version: { required, minLength: minLength(3) },
    },
    methods: {
      async update() {
        console.log("this.labProject", this.labProject);
        // this.$v.labProject.$touch();
        // if (this.$v.labProject.$anyError) {
        //   return;
        // }
        // put data
        // putLabProject(labProjectId,lab)
        //
        try {
          console.log("try");
          await LabProjectsServices.putLabProject(
            this.$store.state.route.params.labProjectId,
            this.labProject
          );
          this.message = "updated";
          console.log("save");

          this.$router.push({
            name: "lab",
            params: {
              labProjectId: this.$store.state.route.params.labProjectId,
            },
          });
        } catch (err) {
          console.log("err", err);
        }
      },
    },
  },
  async mounted() {
    const labProjectId = this.$store.state.route.params.labProjectId;
    this.labProject = (
      await LabProjectsServices.getLabProjectById(labProjectId)
    ).data;
  },
};
</script>

<style>
</style>