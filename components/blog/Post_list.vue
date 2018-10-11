<template>
  <div>
    <b-row>

      <Post
      v-for="post in posts"
      :key="post.id"
      :is-admin="isAdmin" 
      :title="post.title.rendered" 
      :exerp="post.exerp" 
      :thumbnail="post._links" 
      :id="post.id"/>
     
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
    },
    posts: {
      type: Array,
      require: true
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
