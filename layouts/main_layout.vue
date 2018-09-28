<template>
    <v-app>


    <Header/>

    <nuxt/>

    
     <Footer/>


   </v-app>
</template>

<script>
import Header from "@/components/layout/header.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}
</style>


