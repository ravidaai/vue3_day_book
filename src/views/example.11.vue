<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Composition API / Template ref</h1>
        <p ref="p">My name is {{ name }}. My age is {{ age }}</p>
        <p></p>
       

        <h1>Using ref for reactivity</h1>
        <p ref="p_new">My name is {{ name_new }}. My age is {{ age_new }}</p>

         <button @click="handleClick">Click me</button><br><br>
         <input type="text" name="" id="" v-model="name_new">
         <button @click="age_new++">Add one to age</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
/* eslint-disable */

export default {
  name: "composition_api",
  components: {},
  setup() {
    console.log("setup");
    //non reactive
    let name = "mario";
    let age = 30;

    //reactive
    const name_new = ref("mario");
    const age_new = ref(30);

    const p = ref(null); //must be in return
    const handleClick = () => {
      console.log("you clicked me");
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "Helloo Ninjas";

      name_new.value = "Ravi";
      age_new.value = 38;
    };

    return { name, age, handleClick, p, name_new, age_new };
  },
  data() {
    return {
      //this is reactive value
      age: 30,
    };
  },
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