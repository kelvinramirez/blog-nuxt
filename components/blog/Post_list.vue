<template>
    <div>
       

      <b-row>

<Post/>
<Post/>


      </b-row>
   
     


      
   
  


    </div>
</template>
<script>
import Post from "@/components/blog/Post.vue";
export default {
  components: { Post },
  data() {
    return {
      msn: "hola Mundo"
    };
  }
};
</script>

<style>
</style>


