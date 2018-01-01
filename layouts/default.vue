<template>
  <div>
    <MyHeader></MyHeader>
    <nuxt class="layout" />
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
.layout {
  padding-top: 61px;
}
</style>
