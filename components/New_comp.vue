<template>
    <div>
        <h1 class="hola">Hola {{name}}</h1>
    </div>
</template>
<script>
export default {
  data() {
    return {
      //   name: "alexis"
    };
  },
  props: {
    name: String
  }
};
</script>
<style>
.hola {
  background: red;
  color: black;
}
</style>


