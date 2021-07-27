<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Watch & watch effect</h1>
        <p>{{ name }}</p>
        <br />

        <input type="text" name="" id="" v-model="search" />
        <p>Search Term - {{ search }}</p>
        <ul>
          <!-- <li v-for="name in names" :key="name"> -->
          <li v-for="name in matchingNames" :key="name">
            {{ name }}
          </li>
        </ul>
        <button @click="handleClick">Stop watch</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, reactive } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
/* eslint-disable */

export default {
  name: "computed_properties",
  components: {},
  setup() {
    console.log("Setup");
    const name = computed(() => {
      return "Ravi";
    });
    const search = ref("");
    const names = ref([
      "Moti",
      "Uma",
      "Ravi",
      "Sital",
      "Ruchi",
      "Swasti",
      "Arhan",
    ]);

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watch effect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick=()=>{
      stopWatch()
      stopEffect()
    }
    return { name, names, search, matchingNames, handleClick };
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
</style>