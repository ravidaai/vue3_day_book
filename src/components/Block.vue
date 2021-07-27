<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    console.log("LifeCycle Hook - Mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer()
      console.log(`Delay: ${this.delay}`);
    }, this.delay);
  },
  updated() {
    console.log("LifeCycle Hook - updated");
  },
  unmounted() {
    console.log("LifeCycle Hook - unmounted");
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log(`Reaction Time: ${this.reactionTime}`)
      this.$emit('game_end', this.reactionTime)
    },
  },
};
</script>

<style  scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>>

