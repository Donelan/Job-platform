<template>
  <div class="search-bar-component">
    <div class="search-bar-component-select fl"></div>
    <div class="search-bar-component-input fl">
      <input type="text" placeholder="请输入职位或公司名称">
    </div>
    <div class="search-bar-component-button fl">搜索</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SearchBar extends Vue {
  // 跳转页面
}
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
$height: 46px;
.search-bar-component {
  height: 46px;
  border: 2px solid #1b82d2;
  display: flex;
  width: 100%;
  .search-bar-component-select {
    width: 233px;
    height: 100%;
    border-right: 2px solid #1b82d2;
    line-height: $height;
  }
  .search-bar-component-input {
    flex: 1;
    border-right: 2px solid #1b82d2;
    height: 100%;
    > input {
      height: 100%;
      width: 100%;
      padding-left: 12px;
      font-size: 16px;
    }
  }
  .search-bar-component-button {
    width: 139px;
    height: 100%;
    background-color: #1b82d2;
    text-align: center;
    line-height: $height;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>

