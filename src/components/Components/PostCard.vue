<template>
  <div class="post-card">
    <div class="post-name flex between">
      <span class="position-label">{{name}}</span>
      <span class="position-money">{{money}}</span>
    </div>
    <div class="post-require flex between">
      <span class="position-company">东莞乐域光电科技有限公司</span>
      <span>初中 | 3年</span>
    </div>
    <welfare-block style="margin-bottom:12px"></welfare-block>
    <div class="post-position flex between">
      <span class="position-region">广东东莞石排镇</span>
      <span class="position-button">在线聊</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import WelfareBlock from "./WelfareBlock.vue";
@Component({
  components: {
    WelfareBlock
  }
})
export default class PostCard extends Vue {
  @Prop() private name!: String;
  @Prop() private money!: String;
  // 跳转页面
}
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
.post-card {
  padding: 12px 20px 0 20px;
  width: 386px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 20px;
  .post-name {
    margin-bottom: 5px;
    font-size: 18px;
    .position-label {
      color: #1b82d2;
    }
    .position-money {
      color: #f6ab00;
    }
  }
  .post-require {
    font-size: 16px;
    margin-bottom: 8px;
    .position-company {
      color: #4d4d4d;
    }
  }
  .post-position {
    margin-bottom: 20px;
    align-items: center;
    font-size: 16px;
    .position-region {
      color: #808080;
    }
    .position-button {
      height: 32px;
      line-height: 32px;
      border: 1px solid #1b82d2;
      text-align: center;
      width: 100px;
      border-radius: 50px;
      color: #1b82d2;
      cursor: pointer;
      &:hover {
        background-color: #1b82d2;
        color: #fff;
      }
    }
  }
}
</style>
