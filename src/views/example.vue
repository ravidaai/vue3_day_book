<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Fetching Data on setup</h1>

        <div v-if="posts.length">
          <PostList :posts="posts" />
        </div>

        <div v-else>loading...</div>

        <p v-if="error">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "fetching_data_on_setup",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style>
</style>