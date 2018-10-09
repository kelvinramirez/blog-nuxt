<template>
    <b-container>
        <h1>Este es es el post Id {{$route.params.post_id}}</h1>

        <Admin_post_form :post="loadedPost"/>
    
</b-container>

    
</template>

<script>
import Admin_post_form from "@/components/admin/Admin_post_form.vue";
export default {
  data() {
    return {
      loadedPost: {
        name: "Kelvin",
        title: "Esto es un title de post id",
        thumnail: "",
        content: "Este es el contenido"
      }
    };
  },
  layout: "main_layout",
  components: {
    Admin_post_form
  }
};
</script>

<style>
</style>

