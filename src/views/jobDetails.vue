<template>
  <h1>Job Details</h1>
  <!-- <p>The job id is {{$route.params.id}}</p> -->
  <p>The job id is {{ id }}</p>
  <div v-if="job">
    <p>{{ job.title }}</p>
    <p>{{ job.id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
      loading...
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go forward</button>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      //   id: this.$route.params.id,
      job: null,
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "example" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>