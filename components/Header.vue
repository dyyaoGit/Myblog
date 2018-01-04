<template>
    <div class="nav">
        <b-container>
            <b-row>
                <b-col style="margin: 0 auto;">
                    <b-navbar toggleable="md" type="default" variant="default">
                        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                        <b-navbar-brand><h1 class="main">姚君荣的网络博客</h1></b-navbar-brand>
                        <b-collapse is-nav id="nav_collapse">

                            <b-navbar-nav>
                                <b-nav-item href="/content" @click.prevent="jump($event)"><span class="text-primary nav-it">博客首页</span></b-nav-item>
                                <b-nav-item href="/articleList" @click.prevent="jump($event)"><span class="text-primary nav-it">文章列表</span></b-nav-item>
                            </b-navbar-nav>

                        </b-collapse>
                    </b-navbar>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            jump(e) {
                this.$router.push(`/${e.currentTarget.children[0].href.split('/').pop()}`)
            }
        }
    }
</script>

<style scoped>
    .main {
        color: #333;
        font-size: 23px;
    }
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
    }
    .nav-it {
        font-size: 16px;
    }
</style>
