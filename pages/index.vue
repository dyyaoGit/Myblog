<template>
  <div class="main-container">
      <p v-for="item in 100">我是内容</p>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
   asyncData: async function() {
    let { data } = await axios.get('/api/users')
    console.log(data)
       return {users: data}
  },
  head () {
    return {
      title: this.users[0].name
    }
  },
  methods: {
    jump() {
      this.$router.push('/content')
    }
  },
    mounted() {
       console.log(this.users)
    }

}
</script>

<style scoped>
.main-container {
    padding-top: 57px;
    overflow: hidden;
}
</style>
