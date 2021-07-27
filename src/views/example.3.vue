
<template>
  <div class="container">
    
    <div class="row" >
      <div class="col-md-12">
        <div v-if="showModal">
          <Modal header="Sign Up" :arr="['a', 'b']"  :title='title' theme="sale" @close="toggleModal"></Modal>
        </div>
        <button @click="toggleModal">Open Modal</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Modal from '../components/Modal.vue'
export default {
  name: 'example_three',
  components: {Modal},
  data() {
    return {
      title: "Hello Title",
      showModal:false
    };
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    }
    
  },
  computed:{
     
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