<template>


  <b-container>




    <Post_list/>

    <form>
      <input type="text" v-model="id_user">
      <input type="submit" value="enviar">

      <p>{{id_user}}</p>
    </form>

<h1>hola Jeancarlos</h1>

    <hr>


    <v-form ref="form">




      <!-- <v-select @change="test"
      v-model="select"
      :items="items"
      
      label="Item"
    
    ></v-select> -->

      <select name="" id="" @change="getCities" v-model="selected">

        <option v-for="(item, key) in countries" :value="item.Key">{{item.Name}}</option>

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
import axios from "axios";
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
      cities: []
    };
  },
  created() {
    axios
      .get("http://40.117.74.54/facebook/api/location/countries")
      .then(response => {
        this.countries = response.data.payload.countries;
      })
      .catch(console.log);
  },
  methods: {
    User_url() {
      this.$router.push("/post/" + this.id_user);
    },
    getCities() {
      axios
        .get(
          "http://40.117.74.54/facebook/api/location/cities/" + this.selected
        )
        .then(response => {
          this.cities = [];
          this.cities = response.data.payload.cities;
        })
        .catch(console.log);
    }
  }
};
</script>

<style>
</style>
