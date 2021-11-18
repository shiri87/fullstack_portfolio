<template>
  <!-- vuelidate Dan version-->
  <!-- top msg from host -->
  <div class="add container deep-purple-text">
    <div class="card-panel deep-purple lighten-2 white-text">
      <div class="msg">
        <h1>Welcome to Shiri studio Laboratory.</h1>
        <p>Please Add your 'lab project'</p>
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
                <!-- v-model="labProject.project" -->
                <input
                  id="project"
                  type="text"
                  class="validate"
                  v-model="$v.labProject.project.$model"
                  :state="
                    $v.labProject.project.$dirty
                      ? !$v.labProject.project.$error
                      : null
                  "
                  aria-describedby="project-feedback"
                />
                <p id="project-feedback">
                  the project name is required | minimum length 3
                </p>

                <label for="project">Enter the name of your Project</label>
              </div>
              <div class="input-field col s6">
                <!-- v-model="labProject.category" -->
                <input
                  id="category"
                  type="text"
                  class="validate"
                  v-model="$v.labProject.category.$model"
                  :state="
                    $v.labProject.category.$dirty
                      ? !$v.labProject.category.$error
                      : null
                  "
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
                <!-- v-model="labProject.tags" -->
                <input
                  id="tags"
                  type="text"
                  class="validate"
                  v-model="$v.labProject.tags.$model"
                  :state="
                    $v.labProject.tags.$dirty
                      ? !$v.labProject.tags.$error
                      : null
                  "
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
                <!-- v-model="labProject.version" -->
                <input
                  id="version"
                  type="text"
                  class="validate"
                  v-model="$v.labProject.version.$model"
                  :state="
                    $v.labProject.version.$dirty
                      ? !$v.labProject.version.$error
                      : null
                  "
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
                <!-- v-model="labProject.photo" -->
                <input
                  id="photo"
                  type="text"
                  class="validate"
                  v-model="$v.labProject.photo.$model"
                  :state="
                    $v.labProject.photo.$dirty
                      ? !$v.labProject.photo.$error
                      : null
                  "
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
                <!-- v-model="labProject.description" -->
                <input
                  id="description"
                  type="text"
                  class="validate"
                  v-model="$v.labProject.description.$model"
                  :state="
                    $v.labProject.description.$dirty
                      ? !$v.labProject.description.$error
                      : null
                  "
                  aria-describedby="description-feedback"
                />
                <p id="description-feedback">
                  the project description is required | minimum length 3
                </p>
                <label for="description">Enter project's description </label>
              </div>
            </div>
          </form>
        </div>
        <button @click="create" width="100" class="btn btn-large deep-purple">
          add Lab project
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import LabProjectsServices from "../services/LabProjectsServices";
// Validation module
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "AddLabProject",
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
  },
  methods: {
    async create() {
      this.$v.labProject.$touch();
      if (this.$v.labProject.$anyError) {
        setTimeout(() => {
          console.log("vulidate");
        }, 500);
        return;
      }

      // Posts data
      try {
        //postLabProject
        await LabProjectsServices.postLabProject(this.labProject);
        console.log(this.labProject);
        this.$router.push({ name: "lab" });
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style>
</style>