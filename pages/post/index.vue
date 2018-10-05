<template>
<b-container>
    <h1>Post pages</h1>

    <!-- <Admin_post_form/> -->
<Post_list/>
</b-container>
    
</template>

<script>
// import Admin_post_form from "@/components/admin/Admin_post_form.vue";
import Post_list from "@/components/blog/Post_list.vue";
export default {
  layout: "main_layout",
  components: {
    // Admin_post_form
    Post_list
  }
};
</script>

<style>
</style>


