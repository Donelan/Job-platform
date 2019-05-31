<template>
  <div class="senior-search common">
    <div class="senior-search-bar">
      <search-bar></search-bar>
    </div>
    <div class="senior-search-desc">
      <div
        class="senior-search-item"
        v-for="(firstItem,firstIndex) in propsGroup"
        :key="firstIndex"
      >
        <div class="label">{{firstItem.name}}</div>
        <ul class="list">
          <li v-for="(item,index) in firstItem.children" :key="index">{{item.label}}</li>
        </ul>
      </div>
    </div>
    <div class="senior-search-type">
      <div class="fl current">综合排序</div>
      <div class="fl">时间排序</div>
    </div>
    <div class="senior-search-content">
      <div
        class="senior-search-content-item flex between align-center"
        v-for="(item,index) in postList"
        :key="index"
      >
        <div class="senior-content-left">
          <introduce-block
            style="margin:20px 0;cursor:pointer"
            :name="item.name"
            :money="item.money"
            @click.native="goPostDesc(item)"
          ></introduce-block>
          <require-block style="margin-bottom:20px" :list="item.requireList"></require-block>
          <welfare-block style="margin-bottom:20px"></welfare-block>
        </div>
        <div class="senior-content-center">
          <introduce-block style="margin:20px 0;" :name="item.company"></introduce-block>
          <require-block style="margin-bottom:20px" :list="item.list"></require-block>
          <div class="create-time">不限</div>
        </div>
        <div class="senior-content-right flex between align-center">
          <span>收藏</span>
          <chat-button></chat-button>
        </div>
      </div>
      <div class="senior-post-all-check flex align-center">
        <div class="all-checkout">全选</div>
        <div class="collection">收藏职务</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SearchBar from "@/components/SearchBar/index.vue";
import WelfareBlock from "@/components/Components/WelfareBlock.vue";
import RequireBlock from "@/components/Components/RequireBlock.vue";
import IntroduceBlock from "@/components/Components/IntroduceBlock.vue";
import ChatButton from "@/components/Components/ChatButton.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    SearchBar,
    WelfareBlock,
    RequireBlock,
    IntroduceBlock,
    ChatButton
  }
})
export default class SeniorSearch extends Vue {
  // 跳转页面
  propsGroup = require("./config");
  postList = require("./content");

  goPostDesc() {
    console.log("2");
    this.$router.push("/home/job/detail");
  }
}
</script>
<style rel="stylesheet/scss" lang="scss"  scoped>
.senior-search {
  .senior-search-bar {
    margin-top: 20px;
  }
  .senior-search-desc {
    font-size: 16px;
    color: #4d4d4d;
    padding: 12px 0;
    .senior-search-item {
      overflow: hidden;
      margin-bottom: 7px;
      .label {
        float: left;
        margin-right: 12px;
        padding: 4px 0px;
      }
      .list {
        float: left;
        overflow: hidden;
        li {
          float: left;
          padding: 4px 10px;
          margin-right: 8px;
          cursor: pointer;
          &:hover {
            background-color: #f6ab00;
            color: #fff;
            border-radius: 2px;
          }
        }
      }
    }
  }
  .senior-search-type {
    font-size: 20px;
    color: #1a1a1a;
    overflow: hidden;
    margin-top: 12px;
    border-bottom: 1px solid #ebebeb;
    .fl {
      cursor: pointer;
      padding-bottom: 12px;
      margin-right: 40px;
      border-bottom: 2px solid #fff;
      &.current {
        border-bottom: 2px solid #1b82d2;
      }
    }
  }
  .senior-search-content {
    .senior-search-content-item {
      border-bottom: 1px solid #ebebeb;
      .senior-content-left {
        width: 404px;
      }
      .senior-content-center {
        width: 330px;
        .create-time {
          height: 26px;
          color: #999;
          font-size: 14px;
          margin-bottom: 20px;
          line-height: 26px;
        }
      }
      .senior-content-right {
        width: 200px;
      }
    }
    .senior-post-all-check {
      margin: 20px 0 37px 0;
      height: 78px;
      border: 1px solid #ebebeb;
      color: #999;
      padding-left: 20px;
      .all-checkout {
      }
      .collection {
        padding: 0 20px 0 10px;
      }
    }
  }
}
</style>