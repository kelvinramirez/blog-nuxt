<template>


  <b-container>

    <Post_list :posts="posts_loaded"/>

    <form>
      <input type="text" v-model="id_user">
      <input type="submit" value="enviar">
      <p>{{id_user}}</p>
    </form>

<h1>hola Jeancarlos re</h1>

    <hr>

    <v-form ref="form">

      <!-- <v-select @change="test"
      v-model="select"
      :items="items"
      
      label="Item"
    
    ></v-select> -->

      <select name="" id="" @change="getCities" v-model="selected">

        <option v-for="(item, key) in countries" :value="item.Key" :key="key">{{item.Name}}</option>

      </select>


      <select name="" id="">

        <option v-for="(item, key) in cities" :value="item.Key">{{item.Name}}</option>

      </select>


      <!-- <v-select
      v-model="select"
      :items="items"
      
      label="Item"
    
    ></v-select> -->


      <!-- <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn> -->
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </v-form>

    <!-- <ul>
  <li v-for="(item, key) in items">{{item.Name}}</li>
</ul> -->

  </b-container>



</template>

<script>
import Post_list from "@/components/blog/Post_list.vue";
// import axios from "axios";
export default {
  components: {
    Post_list
  },
  layout: "main_layout",
  data() {
    return {
      selected: "DO",
      id_user: "",
      countries: [],
      cities: [],
      posts_loaded: [],
      link_kelvin: ""
    };
  },
  created() {
    this.$axios
      .$get("http://40.117.74.54/facebook/api/location/countries")
      .then(response => {
        // console.log(response);
        this.countries = response.payload.countries;
      })
      .catch(console.log);

    this.$axios
      .$get("http://localhost:8888/xpertcode/wp-json/wp/v2/posts")
      .then(response => {
        // debugger;
        console.log(response);
        this.posts_loaded = response;
      })
      .catch(console.log);
  },
  methods: {
    User_url() {
      this.$router.push("/post/" + this.id_user);
    },
    getCities() {
      this.$axios
        .$get(
          "http://40.117.74.54/facebook/api/location/cities/" + this.selected
        )
        .then(response => {
          this.cities = [];
          this.cities = response.payload.cities;
        })
        .catch(console.log);
    }
  }
};
</script>

<style>
</style>
