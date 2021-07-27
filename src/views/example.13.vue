<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Computed Properties</h1>
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
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
/* eslint-disable */

export default {
  name: "computed_properties",
  components: {},
  setup() {
    const name = computed(() => {
      return "Ravi";
    });
    const search = ref('');
    const names = ref([
      "Moti",
      "Uma",
      "Ravi",
      "Sital",
      "Ruchi",
      "Swasti",
      "Arhan",
    ]);
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { name, names, search, matchingNames };
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