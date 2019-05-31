<template>
  <div class="require-block">
    <span v-for="(item,index) in list" :key="index">{{item}}</span>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component
export default class RequireBlock extends Vue {
  @Prop() private list!: [];
  // 跳转页面
}
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
.require-block {
  width: 100%;
  color: #4d4d4d;
  font-size: 16px;
  box-sizing: border-box;
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
  span {
    display: inline-block;
    padding-right: 10px;
    margin-right: 10px;
    height: 16px;
    line-height: 16px;
    border-right: 1px solid #4d4d4d;
    &:nth-last-of-type(1) {
      border-right: none;
    }
  }
}
</style>

