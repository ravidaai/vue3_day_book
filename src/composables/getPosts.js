import { ref } from "@vue/reactivity";
const getPosts = () => {

  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/jobs");
      if (!data.ok) {
        throw Error("no data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  }
  return {posts, error, load}
};
export default getPosts
