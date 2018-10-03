<template>
  <div>
    <b-row>

      <Post title="Primer post" exerp="Esto es el contenido" />
      <Post title="Segundo post" exerp="Esto es el contenido"/>
      <Post title="Tercer post" exerp="Esto es el contenido"/>

    </b-row>
  </div>
</template>
<script>
  import Post from "@/components/blog/Post.vue";
  export default {
    name:"Post_list",
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
