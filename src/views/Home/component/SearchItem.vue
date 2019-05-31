<template>
  <div class="home-search common">
    <div class="search-item flex">
      <search-bar></search-bar>
      <div class="senior-search">高级搜索</div>
    </div>
    <div class="hot-search">
      <ul class="hot-list">
        <li>热门搜索：</li>
        <li v-for="(item,index) in positionList" :key="index" class="item">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import SearchBar from "@/components/SearchBar/index.vue";
export default Vue.extend({
  name: "SearchItem",
  components: {
    SearchBar
  },
  data() {
    return {
      positionList: [
        {
          label: "保洁"
        },
        {
          label: "销售"
        },
        {
          label: "配菜/打荷"
        },
        {
          label: "服务员"
        },
        {
          label: "导购员"
        },
        {
          label: "客服"
        },
        {
          label: "司机"
        },
        {
          label: "保安"
        },
        {
          label: "水电工"
        },
        {
          label: "迎宾/接待"
        }
      ]
    };
  }
});
</script>
<style rel="stylesheet/scss" lang="scss" >
$height: 46px;
.home-search {
  padding-top: 30px;
  .search-item {
    height: 50px;
    .senior-search {
      font-size: 18px;
      color: #1b82d2;
      width: 170px;
      text-align: center;
      line-height: 50px;
    }
  }
  .hot-search {
    margin-top: 12px;
    margin-bottom: 12px;
    .hot-list {
      overflow: hidden;
      li {
        float: left;
        margin-right: 16px;
        &.item {
          color: #1b82d2;
          cursor: pointer;
          &:hover {
            color: red;
          }
        }
      }
    }
  }
}
</style>