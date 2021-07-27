<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>
          Props in composition API / Life Cycle Hook in composition api (check
          on postList component)
        </h1>
        <PostList  v-if="showPosts" :posts="posts"/>
        <button @click="showPosts = !showPosts">Toggle Post</button>
        <button @click="posts.pop()">Delete Post</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";

export default {
  name: "props_in_composition_api",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: "title 1", body: "body1", id: 1 },
      { title: "title 2", body: "body2", id: 2 },
      { title: "title 2", body: "body2", id: 3 },
    ]);

    const showPosts = ref(true);
    return { posts, showPosts };
  },
};
</script>

<style>
</style>