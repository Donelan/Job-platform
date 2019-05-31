<template>
  <div class="download-page" :style="{
      backgroundImage:`url(${bgUrl})`
  }">
    <div class="common download-box">
      <div class="download-intr">
        <div class="download-text-desc">
          <img :src="require('@/assets/文字描述.png')">
        </div>
        <div class="download-qrocde">
          <div class="download-pic"></div>
          <div class="download-button">
            <div class="download-button-item ios">ios 下载</div>
            <div class="download-button-item android">Android 下载</div>
          </div>
        </div>
      </div>
      <img :src="require('@/assets/手机.png')" class="download-logo">
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
// import QRCode from "qrcodejs2";
export default class Download extends Vue {
  private bgUrl = require("@/assets/bg.png");
  // 跳转页面
}
</script>
<style rel="stylesheet/scss" lang="scss"  scoped>
.download-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  .download-box {
    height: 100%;
    position: relative;
    .download-intr {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      .download-text-desc {
        img {
          width: 800px;
        }
      }
      .download-qrocde {
        display: flex;
        align-items: center;
        margin-top: 70px;
        .download-pic {
          width: 180px;
          height: 180px;
          background-color: #fff;
          margin-left: 100px;
        }
        .download-button {
          margin-left: 40px;
          .download-button-item {
            width: 300px;
            color: #333333;
            text-align: center;
            height: 60px;
            line-height: 60px;
            background-color: #fff;
            border-radius: 8px;
            font-size: 22px;
            cursor: pointer;
          }
          .ios {
            margin-bottom: 30px;
          }
        }
      }
    }
    .download-logo {
      width: 260px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
    }
  }
}
</style>

