<template>
<div>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat><nuxt-link to="/">Inicio</nuxt-link></v-btn>
      <v-btn flat><nuxt-link to="/Nosotros">Nosotros</nuxt-link></v-btn>
      <v-btn flat> <nuxt-link to="/Contactos">Contactos</nuxt-link> </v-btn>
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


