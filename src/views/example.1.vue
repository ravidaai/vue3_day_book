<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>#Example</h1>
        <h5>{{ title }}</h5>
      </div>
    </div>
    <div class="row">
      <div v-if="show">
        <div class="col-md-12">
          {{ fname }} {{ lname }} {{ mobile }} {{ age }}
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <button v-on:click="age++" class="btn btn-primary m-3">
          Increase age</button
        ><br />
        <button v-on:click="age--" class="btn btn-primary m-3">
          Decrease age</button
        ><br />
        <button @click="changeTitle" class="btn btn-primary m-3">
          Change Title</button
        ><br />
        <button @click="toggleShow" class="btn btn-primary m-3">
          <span v-if="show">Hide</span> <span v-else>Show</span></button
        ><br />
        <span v-show="show"><strong>Showing</strong></span>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <h1>#Mouse Events</h1>
        <span @mouseover="handleEvent($event, 5)">Mouse over</span><br />
        <span @mouseleave="handleEvent">Mouse leave</span><br />
        <span @dblclick="handleEvent">Db click</span><br />
      </div>
    </div>

    <div class="row">
      <div
        class="col-md-12 p-5"
        @mousemove="handleMouseMoveEvent"
        style="background-color: grey"
      >
        position - {{ x }} {{ y }}
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
         
        <h1>For Loop / Dynamic class</h1>
        <ul>
            <!-- <div
  v-for="({ foo, id }) in bar"
  :key="id"
  :ref="baz"
> -->

          <li
            v-for="book in books"
            :key="book.id"
            :class="{ fav: book.isFav }"
          >
            {{ book.title }} {{ book.author }}
            <img :src="book.img" :alt="book.title" />
          </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <h1>Attribute Binding</h1>
        <a v-bind:href="url">Link</a><br />
        <a :href="url">Link 1</a><br />
      </div>
    </div>
<div class="row">
      <div class="col-md-12">
        <h1>Computed</h1>
        {{filteredBooks}}
      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: "Ravi",
      lname: "Karmacharya",
      mobile: "9841056175",
      age: 38,
      title: "web developer",
      show: true,
      x: 0,
      y: 0,
      books: [
        {
          title: "book 1",
          author: "author 1",
          img: "../assets/logo.png",
          isFav: true,
        },
        {
          title: "book 2",
          author: "author 2",
          img: "../assets/logo.png",
          isFav: false,
        },
        {
          title: "book 3",
          author: "author 3",
          img: "../assets/logo.png",
          isFav: true,
        },
      ],
      url: "http://ravikazi.com.np",
    };
  },
  methods: {
    changeTitle() {
      this.title = "full stack developer";
    },
    toggleShow() {
      this.show = !this.show;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMoveEvent(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      console.log(book);
      
    },
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