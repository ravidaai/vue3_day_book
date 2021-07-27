<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Refs vs Reactive</h1>
        <h3>Refs</h3>
        <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
        <button @click="updateNinjaOne">Update NinjaOne</button>
        <h3>Reactive</h3>
        <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
        <button @click="updateNinjaTwo">Update NinjaTwo</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, reactive } from "@vue/reactivity";
/* eslint-disable */

export default {
  name: "reactive",
  components: {},
  setup() {
    console.log("setup");
    const ninjaOne = ref({ name: "Mario", age: 30 });
    const ninjaTwo = reactive({ name: "Luigi", age: 35 });

    const nameOne = ref('mario')
    const nameTwo = reactive('luigi') //it is primitive value so can not be changed

    //ref
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    //reactive
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
    };
    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameTwo, nameOne };
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
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