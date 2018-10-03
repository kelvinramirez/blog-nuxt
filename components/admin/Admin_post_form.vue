<template>
    
  <v-form ref="form" @submit.prevent="submit">
    <v-text-field
      v-model="editedPost.name"
      
      :counter="10"
      label="Autor"
     
    ></v-text-field>

    <v-text-field
      v-model="editedPost.title"
      
      label="Title"
      required
    ></v-text-field>

        <v-text-field
      v-model="editedPost.thumnail"
      
      label="Thumnail link"
      required
    ></v-text-field>

     <v-textarea
          name="input-7-1"
          label="Default style"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          hint="Hint text"
          v-model="editedPost.content"
        ></v-textarea>
   


    <v-btn type="submit">Submit</v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->
  </v-form>
</template>


<script>
export default {
  data() {
    return {
      editedPost: {
        name: "",
        title: "",
        thumnail: "",
        content: ""
      }
    };
  },
  methods: {
    submit: function() {
      alert(this.editedPost.name);
    }
  }
};
</script>

<style>
</style>


