<script>
export default{
    name: "CharactersCard",
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="characters-item">
        <img :src="character.img" :alt="character.name">
        <div class="character-description">
            <h2>{{character.name}}</h2>
            <h5>{{character.category}}</h5>
            <h6>{{character.status}}</h6>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;

.characters-item{
    width: 100%;
    height: 100%;
    background-color: $primary-background;
    padding: 1em;

    img{
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: top;
    }

    .character-description{
        text-align: center;
        margin: 1em 0;

        h2{
            font-size: 1.4rem;
            font-weight: bold;
            margin-bottom: 1em;
        }

        h5{
            font-size: 1.2rem;
            color: $secondary-text;
        }

        h6{
            font-size: 1rem;
            color: $secondary-text;
        }
    }
}
</style>