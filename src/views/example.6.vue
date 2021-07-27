
<template>
  <div class="container" v-if="showModal">
    
    <div class="row" >
      <div class="col-md-12">
        <div>
          <Modal header="Sign Up" :arr="['a', 'b']"  :title='title' theme="sale" @close="toggleModal">
            <template v-slot:links>
              <a href="#">Sign Up Now</a>
               <a href="#">More Info</a>
            </template>
            <h1>Hello world test</h1>
          </Modal>
        </div>
        
      </div>
    </div>
  </div>
  <p>
    <button @click="toggleModal">Open Modal</button><br><br>
    <button @click.right="toggleModal">Open Modal with right click</button>
  </p>

  <Teleport to ="#modals">
    <h1>Teleport Component</h1>
  </Teleport>
</template>

<script>
/* eslint-disable */
import Modal from '../components/Modal.vue'
import Teleport from '../components/Teleport.vue'
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