<script>
import axios from "axios";
import { store } from "./store";

import AppHeader from "./components/AppHeader.vue";
import CharactersLis from "./components/CharactersList.vue";

export default {
  components: {
    AppHeader,
    CharactersLis
  },
  data(){
    return {
      store,
    }
  },
  created() {
    axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then( (resp) => {
      this.store.characters = resp.data;
      console.log(this.store.characters);
    })
  }
} 
</script>

<template>
  <AppHeader />

  <main>
    <CharactersLis />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>