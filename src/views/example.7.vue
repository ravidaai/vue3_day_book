
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Ninja Timer</h1>
        <h3>Using Life cycle hook like created, mounted</h3>
        <button @click="start" :disabled="isPlaying">Play</button>
        <Block v-if="isPlaying" :delay="delay" @game_end="game_end"></Block>
        <!-- <p v-if="showResults">Reaction Time: {{score}} ms</p> -->
        <Results v-if="showResults" :score="score"></Results>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Block from "../components/Block.vue";
import Results from "../components/Results.vue";
export default {
  name: "game",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false
      console.log(this.delay);
    },
    game_end(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false
      this.showResults = true
    },
  },
};
</script>

<style>
</style>