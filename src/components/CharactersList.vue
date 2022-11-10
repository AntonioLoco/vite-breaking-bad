<script>
import CharactersCard from './CharactersCard.vue';
import { store } from '../store';

export default{
    name: "CharactersList",
    components:{
        CharactersCard,
    },
    data(){
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <select class="form-select" aria-label="Default select example">
            <option selected>Select category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>

        <div class="characters-container">
            <div class="characters-founded">Founded {{store.characters.length}} characters</div>
            <div class="characters-list row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6 g-3">
                <div class="col" v-for="item in store.characters" :key="item.char_id">
                    <CharactersCard :character="item"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;


.container{
    margin: 1em 0;

    .form-select{
        max-width: 200px;
    }

    .characters-container{
        background-color: $secondary-background;
        padding: 2em;
        margin: 2em 0;

        .characters-founded{
            background-color: $background-banner;
            padding: 1em;
        }

        .characters-list{
            margin: 1em 0;
        }
    }



}
</style>