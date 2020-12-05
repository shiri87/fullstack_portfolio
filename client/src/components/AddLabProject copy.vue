<template>
  <!-- vuelidate doc version -->
  <div class="contianer">
    <!-- top msg from host -->

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

    <div class="add container deep-purple-text">
      <form>
        <!-- first row -->
        <div class="row">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.LabProjects.project.$error }"
          >
            <label class="form__label">project</label>
            <input
              class="form__input"
              v-model.trim="$v.LabProjects.project.$model"
            />
          </div>
          <div class="error" v-if="!$v.LabProjects.project.required">
            Field is required
          </div>
          <div class="error" v-if="!$v.LabProjects.project.minLength">
            project must have at least
            {{ $v.LabProjects.project.$params.minLength.min }} letters.
          </div>
          <tree-view
            :data="$v.LabProjects.project"
            :options="{ rootObjectKey: '$v.LabProjects.project', maxDepth: 2 }"
          ></tree-view>

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.labProjects.category.$error }"
          >
            <label class="form__label">category</label>
            <input
              class="form__input"
              v-model.trim="$v.labProjects.category.$model"
            />
          </div>
          <div class="error" v-if="!$v.labProjects.category.required">
            Field is required
          </div>
          <div class="error" v-if="!$v.labProjects.category.minLength">
            category must have at least
            {{ $v.labProjects.category.$params.minLength.min }} letters.
          </div>
          <tree-view
            :data="$v.labProjects.category"
            :options="{ rootObjectKey: '$v.labProjects.category', maxDepth: 2 }"
          ></tree-view>
        </div>

        <button @click="create" width="100" class="btn btn-large deep-purple">
          add Lab project
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import LabProjectsServices from "../services/LabProjectsServices";
// import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "AddLabProject",
  props: {
    msg: String,
  },
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
  // mixins: [validationMixin],
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