<template>
  <b-col lg="4">

    <v-card>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

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

  </b-col>


</template>

<script>
  export default {
props:{
  title:String,
  exerp:String
}

  };

</script>

<style>
</style>
