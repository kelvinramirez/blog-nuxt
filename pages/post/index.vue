<template>
<b-container>
    <h1>Post pages</h1>

    <Admin_post_form/>

</b-container>
    
</template>

<script>
import Admin_post_form from "@/components/admin/Admin_post_form.vue";
export default {
  layout: "main_layout",
  components: {
    Admin_post_form
  }
};
</script>

<style>
</style>


