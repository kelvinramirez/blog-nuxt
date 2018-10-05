<template>
   <b-container>
        <Admin_post_form @form_data="do_something"/>
  </b-container>
</template>

<script>
import Admin_post_form from "@/components/admin/Admin_post_form.vue";
export default {
  components: {
    Admin_post_form
  },
  layout: "main_layout",
  data() {
    return {};
  },
  methods: {
    do_something: function(event) {
      //   alert("hola");
      console.log(event);
    }
  }
};
</script>

<style>
</style>


