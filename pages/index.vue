<template>
  <div class="main-container">

  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
   asyncData: async function() {
    let { data } = await axios.get('/api/users')
    let {data:articleList} = await axios.get('/api/articleList')
       return {users: data, articleList}
  },
  head () {
    return {
      title: '姚君荣的个人博客'
    }
  },
  methods: {
    jump() {
      this.$router.push('/content')
    }
  },
    mounted() {
       console.log(this.articleList)
    }

}
</script>

<style scoped>
.main-container {
    padding-top: 57px;
    overflow: hidden;
}
</style>
