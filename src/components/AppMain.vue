<script>

    import filmsContainer from './filmsContainer.vue';

    export default{
        name: "AppMAin",
        components: {
            filmsContainer
        }
    }

</script>

<template>

    <main>

        <div class="main-wrapper container">

            <filmsContainer />

        </div>



    </main>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/mixins' as *;

    main{
        background-color: #434343;
        overflow-y: auto;
    }

</style>