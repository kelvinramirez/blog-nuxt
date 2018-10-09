<template>
  <div class="container">
    <section class="text-center">
     <v-btn color="success" @click="$router.push('/admin/new_post')">New post</v-btn>
    </section>

    <section>
      <Post_list isAdmin/>
    </section>
  </div>


</template>

<script>
import Post_list from "@/components/blog/Post_list.vue";

export default {
  components: {
    Post_list
  },
  layout: "main_layout"
};
</script>

<style>
</style>
