<template>
    <div class="article-item">
        <div class="author-msg">
            <div class="author-avatar">
                <img :src="itemData.avatar" alt="作者头像">
            </div>
            <div class="author-name">{{itemData.author}}</div>
            <div class="create-time">
                {{itemData.create_time}}
            </div>
        </div>
        <h2 class="article-title">{{itemData.title}}</h2>
        <p>{{itemData.content}}</p>
    </div>
</template>

<style scoped lang="scss">
    .article-item {
        padding: 17px;
        border-bottom: 1px solid #f1f1f1;
    }
    .author-msg {
        display: flex;
        align-items: center;

        .author-name {
            color: #333;
            font-size: 13px;
            line-height: 20px;
            font-weight: 700;
            margin-right: 12px;
        }
        .author-avatar{
            display: inline-block;
            vertical-align: middle;
            margin-right: 12px;
            border: 1px solid #f5f5f5;
            border-radius: 50%;
            overflow: hidden;
        }
    }
    .author-msg .author-avatar img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .article-title {
        display: inherit;
        margin: 15px 0;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    .article-title:hover {
        text-decoration: underline;
    }
</style>

<script>
    export default {
        props: {
            itemData: {}
        },
        name: "article-item",
        mounted() {

        }
    }
</script>

