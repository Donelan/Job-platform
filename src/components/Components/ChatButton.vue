<template>
  <span class="chat-button">在线聊</span>
</template>
<script lang="ts">
import { Vue, Prop ,Component } from "vue-property-decorator";
@Component
export default class ChatButton extends Vue {

  // 跳转页面
}
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
.chat-button {
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
</style>

