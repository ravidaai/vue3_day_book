<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
      <div :class="{sale: theme === 'sale'}">
        {{ header }} <br />
        {{ arr }}<br />
        {{ title }}
        <p>
          <button @click="closeModal">Close Modal</button>
        </p>
      </div>
    </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <slot>Default Content if no content inside slot</slot>
        <div class="actions">
          <slot name="links"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "arr", "title", "theme"],
  methods:{
    closeModal(){
      this.$emit('close')
    }
  }
};
</script>

<style scoped>
.sale{
  background-color: #ccc;
}
</style>