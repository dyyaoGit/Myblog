<template>
    <div style="padding: 15px;">
        我是文章页
        <!-- <Table :data="testData" border :columns="[{title: '名字', key: 'name'}, {title: '号码', key: 'phone'}]"></Table> -->
        <ul>
            <li v-for="(item,index) in testData" :key="index">
                <div>名字:{{item.name}}</div>
                <div>号码:{{item.phone}}</div>
            </li>
        </ul>
        <Button @click="back" type="primary" style="margin-top:20px">返回</Button>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    async asyncData () {
    return axios.get('http://localhost:3000/api/myMsg').then(res => {
        return { testData: res.data }
    }).catch(err => {
        
    })
  },
  data() {
      return {
        testData: []
      }
  },
  methods: {
      back() {
          this.$router.push('/')
      }
  },
  created() {
     
  }
};
</script>
