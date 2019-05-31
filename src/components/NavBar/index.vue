<template>
  <div class="search-bar">
    <div class="common">
      <ul>
        <li>首页</li>
        <li>职务搜索</li>
        <li>政策咨询</li>
        <li>通知公告</li>
        <li>培训活动</li>
        <li>社区专栏</li>
        <li>联系我们</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class NavBar extends Vue {
  // 跳转页面
}
</script>



<style rel="stylesheet/scss" lang="scss"  scoped>
.search-bar {
  height: 50px;
  background-color: #1b82d2;
  .common {
    ul {
      li {
        float: left;
        color: #fff;
        font-size: 20px;
        line-height: 50px;
        width: 149px;
        border-left: 1px solid #1a91d4;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
