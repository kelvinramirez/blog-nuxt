<template>
  <b-col lg="4">

<nuxt-link :to="postLink">

    <v-card>
      <v-img :src="thumbnail" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{title}}</h3>
          <div v-html="exerp">
            
          </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>


</nuxt-link>

  </b-col>


</template>

<script>
export default {
  props: {
    title: String,
    exerp: String,
    thumbnail: String,
    id: Number,
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {};
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
