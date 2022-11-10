<script>
export default{
    name: "AppHeader",
}
</script>

<template>
    <header>
        <!-- Header Logo -->
        <div class="header-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png" alt="Logo Breaking bad">
            <h1>Breaking Bad API</h1>
        </div>
        <!-- /Header Logo -->
    </header>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;

.header-logo {
    display: flex;
    align-items: center;
    padding: .5em 1em;

    img {
        width: 100px;
    }

    h1{
        font-weight: 700;
        margin-left: .5em;
    }
}
</style>