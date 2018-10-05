<template>
<div>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Blog Nuxt</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat><nuxt-link to="/">Inicio</nuxt-link></v-btn>
       <v-btn flat><nuxt-link to="/post">Posts</nuxt-link></v-btn>
      <v-btn flat><nuxt-link to="/about">Nosotros</nuxt-link></v-btn>
      <v-btn flat> <nuxt-link to="/contacts">Contactos</nuxt-link> </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>





</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>


