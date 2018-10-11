<template>
<b-container>
  <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn type="submit">{{isLogin ? 'Login' : 'Sing Up'}}</v-btn>
    <v-btn @click="isLogin = !isLogin">clear</v-btn>
  </v-form>
</b-container>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true
    };
  },
  layout: "main_layout"
};
</script>

<style>
</style>

