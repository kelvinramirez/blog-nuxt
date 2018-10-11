<template>
  <b-col lg="4">

<nuxt-link :to="postLink">

    <v-card>
      <v-img :src="thumbnail" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{title}}</h3>
          <div>
            {{exerp}}    
          </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>

<img :src="img_k" alt="">

  {{img}}

</nuxt-link>

  </b-col>


</template>

<script>
export default {
  props: {
    title: String,
    exerp: String,
    thumbnail: String,
    id: String,
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      // img_k: "/image/xpert.jpeg"
      img_k: "_nuxt/assets/image/xpert.jpeg"
    };
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/post/" + this.id;
    }
  }
};
</script>

<style>
</style>
