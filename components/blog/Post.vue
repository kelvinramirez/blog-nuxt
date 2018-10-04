<template>
  <b-col lg="4">

<nuxt-link :to="'/post/' + id">


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

</nuxt-link>

  </b-col>


</template>

<script>
export default {
  props: {
    title: String,
    exerp: String,
    thumbnail: String,
    id: String
  }
};
</script>

<style>
</style>
