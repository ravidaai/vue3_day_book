<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Fetching Data on setup</h1>
        
        <div v-if="posts.length">
          <PostList :posts="posts" />
        </div>

        <div v-else>
          loading...
        </div>

        <p v-if="error">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";

export default {
  name: "fetching_data_on_setup",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/jobs");
        if (!data.ok) {
          throw Error("no data available");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    return { posts, error };
  },
};
</script>

<style>
</style>