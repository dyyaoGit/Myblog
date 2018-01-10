<template>
    <div class="main-container">
        <div class="main-content">
            <h2 class="article-type-title">最新文章</h2>
            <div class="article-container">
                <articleItem :itemData="articleList"></articleItem>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import articleItem from '~/components/index/articleItem.vue'

    export default {
        asyncData: async function() {
            let {data:articleList} = await axios.get('/api/articleList')
            return {articleList}
        },
        components: {
            articleItem
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
        created() {
            console.log(this.articleList)
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .main-container {
        display: flex;
        justify-content: space-between;
        max-width: 960px;
        margin: 1.767rem auto 0;
    }
    .main-content {
        flex-grow: 1;
    }
    .article-type-title {
        background: #fff;
        font-size: 16px;
        line-height: 1;
        padding: 1.5rem 2rem;
        font-weight: 500;
        color: #333;
        border-bottom: 1px solid #f1f1f1;
    }
    .article-box {

    }
</style>
