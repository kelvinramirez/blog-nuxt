<template>
    <div>

        <b-container v-if="loaded_single_post">
             <b-img :src="loaded_single_post.fimg_url" fluid alt="Responsive image" />
            <!-- <img :src="loaded_single_post.fimg_url" fluid alt=""> -->
            <h1>Este es mi id {{$route.params.id}}</h1> 
            <h1>{{id_post}}</h1> 
            <hr>
            <h1>{{loaded_single_post.title.rendered}}</h1>
            <h1>{{loaded_single_post.date}}</h1>
            <h1>{{loaded_single_post.categories[0]}}</h1>
            <h1 v-html="loaded_single_post.excerpt"></h1>

        </b-container>
       
    </div>
</template>

<script>
import Post from "@/models/post.model";
export default {
  data() {
    return {
      id_post: this.$route.params.id,
      loaded_single_post: null
    };
  },
  layout: "main_layout",
  async created() {
    // debugger;
    // this.$axios
    //   .$get(
    //     "http://localhost:8888/xpertcode/wp-json/wp/v2/posts/" + this.id_post
    //   )
    //   .then(response => {
    //     debugger;
    //     console.log(response);
    //     this.loaded_single_post = new Post(response);
    //   })
    //   .catch(console.log);
    // setTimeout(() => {
    //   this.loaded_single_post.title.rendered = "Hola mundo";
    // }, 1000);

    try {
      await this.singlepostfill();
    } catch (e) {
      alert(e.message);
    }
  },
  methods: {
    async singlepostfill() {
      try {
        let single_post = await this.$axios.$get(
          "http://localhost:8888/xpertcode/wp-json/wp/v2/posts/" + this.id_post
        );

        single_post = new Post(single_post);

        if (!single_post) {
          alert("No se han podido cargar los datos");
          return;
        }
        this.loaded_single_post = single_post;
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>


<style>
</style>



