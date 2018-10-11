<template>
    <div>

        <b-container> 
        <h1>Página de contactos</h1>
        {{hola}}
        </b-container>
      
    </div>
</template>
<script>
export default {
  layout: "main_layout",
  computed: {
    hola() {
      return 5 + 5;
    }
  }
};
</script>
<style>
</style>

