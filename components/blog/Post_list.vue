<template>
  <div>
    <b-row>

      <Post :is-admin="isAdmin" title="Primer post" exerp="Esto es el contenido" thumbnail="https://cdn.vuetifyjs.com/images/cards/desert.jpg" id="1" />
      <Post :is-admin="isAdmin" title="Segundo post" exerp="Esto es el contenido" thumbnail="https://cdn.vuetifyjs.com/images/cards/desert.jpg" id="2"/>
      <Post :is-admin="isAdmin" title="Tercer post" exerp="Esto es el contenido" thumbnail="https://cdn.vuetifyjs.com/images/cards/desert.jpg" id="3"/>

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
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
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
