<script>
import axios from "axios";
import { store } from "./store";

import AppHeader from "./components/AppHeader.vue";
import CharactersList from "./components/CharactersList.vue";
import AppLoader from "./components/AppLoader.vue";

export default {
  components: {
    AppHeader,
    CharactersList,
    AppLoader
},
  data(){
    return {
      store,
    }
  },
  methods: {
    getCharacter(){
      this.store.loading = true;

      const params = {
        ...this.store.categoryFilter && { category: this.store.categoryFilter }
      }

      axios
        .get("https://www.breakingbadapi.com/api/characters", { params })
        .then( (resp) => {
          this.store.characters = resp.data;
          console.log(resp.data);
        })
        .catch( (error) => {
          console.log(error);
        })
        .finally( () => {
          this.store.loading = false;
        });
    }
  },
  created() {
    this.getCharacter();
  }
} 
</script>

<template>
  <AppHeader />

  <main>
    <AppLoader  v-if="store.loading" />
    <CharactersList v-else @changeOption="getCharacter"/>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>