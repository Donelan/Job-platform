<template>
  <div class="post-item common">
    <div class="post-item-tab">
      <ul>
        <li class="current">看附近</li>
        <li>入职快</li>
        <li>好福利</li>
      </ul>
    </div>
    <div class="flex between wrap mt-20">
      <post-card v-for="(item,index) in list" :key="index" :name="item.name" :money="item.money"></post-card>
    </div>
    <div class="more-post">更多职位</div>
  </div>
</template>
<script lang="ts">
import PostCard from "@/components/Components/PostCard.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    PostCard
  }
})
export default class PostItem extends Vue {
  // 跳转页面
  report() {
    alert("举报成功！");
  }
  private list = [
    {
      name: "电子工程师",
      money: "7K-8K"
    },
    {
      name: "小区保安",
      money: "3K-4K"
    },
    {
      name: "食堂配菜员",
      money: "7K-8K"
    },
    {
      name: "食堂配菜员",
      money: "5K-6K"
    },
    {
      name: "大厦保洁",
      money: "3K-4K"
    },
    {
      name: "电工",
      money: "7K-8K"
    }
  ];
}
</script>
<style rel="stylesheet/scss" lang="scss"  scoped>
.post-item {
  .post-item-tab {
    border-bottom: 1px solid #ebebeb;
    margin-top: 12px;
    ul {
      overflow: hidden;
      li {
        width: 80px;
        float: left;
        font-size: 18px;
        color: #000;
        padding-bottom: 12px;
        margin-right: 12px;
        text-align: center;
        border-bottom: 2px solid #fff;
        cursor: pointer;
        &.current {
          border-bottom: 2px solid #1b82d2;
        }
      }
    }
  }
}
.more-post {
  text-align: center;
  line-height: 40px;
  color: #fff;
  background-color: #1b82d2;
  font-size: 18px;
  width: 140px;
  height: 40px;
  margin: 20px auto 72px auto;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
</style>