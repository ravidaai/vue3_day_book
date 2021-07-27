<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Jobs</h1>
        <div v-if="jobs.length">
          <div v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
              <h3>{{ job.title }}</h3>
            </router-link>
          </div>
        </div>
        <div v-else>loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "form",
  components: {},
  data() {
    return {
      jobs: [],
    };
  },
  methods: {},
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>