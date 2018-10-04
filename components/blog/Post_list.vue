<template>
  <div>
    <b-row>

      <Post title="Primer post" exerp="Esto es el contenido" thumbnail="https://cdn.vuetifyjs.com/images/cards/desert.jpg" id="1" />
      <Post title="Segundo post" exerp="Esto es el contenido" thumbnail="https://cdn.vuetifyjs.com/images/cards/desert.jpg" id="2"/>
      <Post title="Tercer post" exerp="Esto es el contenido" thumbnail="https://cdn.vuetifyjs.com/images/cards/desert.jpg" id="3"/>

    </b-row>
  </div>
</template>
<script>
import Post from "@/components/blog/Post.vue";
export default {
  name: "Post_list",
  components: {
    Post
  },
  data() {
    return {
      msn: "hola Mundo"
    };
  }
};
</script>

<style>
</style>
