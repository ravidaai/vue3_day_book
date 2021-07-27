<template>
  <div class="post-list">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <!-- {{ post.title }} -->
        <SinglePost :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import SinglePost from "../components/singlePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts);
    onMounted(()=>console.log('mounted'))
    onUnmounted(()=>console.log('unmounted'))
    onUpdated(()=>console.log('Updated'))
  },
};
</script>

<style>
</style>