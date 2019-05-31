<template>
  <div class="introduce-block">
    <span class="post-name fl">{{name}}</span>
    <span class="money-month fr">{{money}}</span>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component
export default class IntroduceBlock extends Vue {
  @Prop() private name!: String;
  @Prop() private money!: String;
  // 跳转页面
}
</script>


<style rel="stylesheet/scss" lang="scss"  scoped>
.introduce-block {
  overflow: hidden;
  font-size: 18px;
  .post-name {
    color: #1a1a1a;
  }
  .money-month {
    color: #f6ab00;
  }
}
</style>
