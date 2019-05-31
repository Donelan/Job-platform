<template>
  <div class="welfare-block">
    <span>包住</span>
    <span>餐补</span>
    <span>话费补助</span>
    <span>加班补助</span>
    <span>五险一金</span>
  </div>
</template>
<script lang="ts">
import { Vue, Prop ,Component } from "vue-property-decorator";
@Component
export default class WelfareBlock extends Vue {
  // 跳转页面
}
</script>


<style rel="stylesheet/scss" lang="scss"  scoped>
.welfare-block {
  height: 28px;
  overflow: hidden;
  span {
    height: 26px;
    color: #999;
    font-size: 14px;
    float: left;
    margin-right: 6px;
    border: 1px solid #ebebeb;
    padding: 0 8px;
    line-height: 26px;
    border-radius: 4px;
  }
}
</style>
