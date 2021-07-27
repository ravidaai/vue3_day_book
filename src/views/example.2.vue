<template>
  <div class="container">
    
    <div class="row">
      <div class="col-md-12">
        <h1>Example</h1>
        <input type="text" ref="name">
        <button @click="handleClick">click me</button>
      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    }
  },
  computed:{
      filteredBooks(){
          return this.books.filter((book)=>book.isFav)
      }
  }
};
</script>

<style>
li {
  list-style: none;
  padding: 15px 0;
}
.fav {
  background-color: #ff9ad2;
}
</style>