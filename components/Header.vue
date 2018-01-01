<template>
  <div class="nav navbar-fixed-top">
      <div class="header clear-fixed">
        <div class="header-left fll">
            姚君荣的个人博客
        </div>
        <div class="header-center">
            <Menu mode="horizontal" active-name="1">
                <MenuItem name="1">
                    <nuxt-link to="/" class="nav-item">
                        博客首页
                    </nuxt-link>      
                </MenuItem>
            </Menu>
        </div>
      </div>
  </div>
</template>

<style>
.nav .ivu-menu-horizontal {
    line-height: 56px;
}
.ivu-menu-horizontal.ivu-menu-light:after {
    content: '';
    height: 0;
}
</style>

<style scoped>
.nav {
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
}
.nav-item {
    display: block;
    width: 100%;
    line-height: 56px;
}
.navbar-fixed-top {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
}
.header {
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    height: 56px;
}
.header-left {
    line-height: 56px;
    font-size: 20px;
}
.header-center {
    width: 945px;
    margin: 0 auto;
}
</style>
