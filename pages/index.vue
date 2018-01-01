<template>
  <section class="container">
    我的博客主页
    <nuxt-link to="content">文章页</nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: '姚君荣的博客'
    }
  },
  methods: {
    jump() {
      this.$router.push('/content')
    }
  }
}
</script>

<style scoped>

</style>
