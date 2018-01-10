<template>
    <div class="app">
        <MyHeader></MyHeader>
        <nuxt class="container" />
    </div>
</template>

<script>
    import Header from '~/components/Header.vue'
    import MyFooter from '~/components/Footer.vue'

    export default {
        components: {
            MyFooter,
            MyHeader:Header
        },
        watch: {
            $route(val){
                console.log(val)
            }
        }
    }
</script>

<style>
    .app {
        min-height: 100vh;
        background: #f4f5f5;
    }
    .container {
        position: relative;
        margin: 0 auto;
        width: 100%;
        max-width: 960px;
    }
</style>
