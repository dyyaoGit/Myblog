<template>
    <div class="main-header">
        <div class="container">
            <h1 class="main-title">网络博客</h1>
            <ul class="main-nav">
                <li><nuxt-link to="/" :class="{active: name == 'index'}">首页</nuxt-link></li>
                <li><nuxt-link to="/ArticleList" :class="{active: name === 'ArticleList'}">文章列表</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>
<style scoped >
    .main-header {
        background: #fff;
        border-bottom: 1px solid #f1f1f1;
        color: #909090;
        height: 5rem;

    }
    .main-header .container {
        max-width: 960px;
        margin: auto;
        z-index: 250;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 5rem;
        transition: all .2s;
    }
    .container {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .main-title {
        color: #333;
        margin-right: 5rem;
    }
    .main-nav {
        display: flex;
        height: 100%;
        align-items: center;
        text-align: center;
    }
    .main-nav li {
        padding: 0 20px;
        height: 5rem;
        line-height: 5rem;
        padding: 0 1.2rem;
        font-size: 1.33rem;
        cursor: pointer;
    }
    .main-nav a {
        color: #71777c;
    }
    .main-nav li a.active{
        color:  #007fff;
    }

</style>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            jump(e) {
                this.$router.push(`/${e.currentTarget.children[0].href.split('/').pop()}`)
            }
        },
        created() {
            console.log(this.$route.name)
        },
        computed: {
            name() {
                return this.$route.name
            }
        }
    }
</script>


