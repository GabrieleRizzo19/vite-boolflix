<script>

    import AppLogo from './AppLogo.vue';
    import searchBar from './searchBar.vue';

    export default{
        name: "AppHeader",
        components: {
            AppLogo,
            searchBar
        }
    }

</script>

<template>

    <header>

        <div class="header-wrapper container">

            <AppLogo />
            
            <searchBar />

        </div>



    </header>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/mixins' as *;

    header{
        background-color: #222;
    }
    .header-wrapper{
        @include flex(row, space-between, center, wrap)
    }

</style>