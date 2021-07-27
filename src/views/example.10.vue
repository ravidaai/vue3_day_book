<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Composition API</h1>
        <p>My name is {{ name }}</p>
        <p>My age is {{ age }}</p>
        <button @click="handleClick">Click me</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "composition_api",
  components: {},
  setup() {
    console.log("setup");
    //this is non reactive value but can be made reactive
    let name = "mario";
    let age = 30;

    const handleClick = ()=>{
      console.log('you clicked me')
    }
    return { name, age, handleClick };
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