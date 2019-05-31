<template>
  <div class="header-bar">
    <div class="common flex between header-box">
      <div class="header-logo">
        <div class="logo-pic">logo</div>
        <div class="checkout-region">
          <div class="checkout-cxk">(切换区域)</div>
          <div class="checkout-position">胡家庙</div>
        </div>
      </div>
      <div class="quick-entry">
        <span class="enterprise">企业入口</span>
        <img :src="require('@/assets/手机icon.png')" class="phone-icon">
        <span>平台APP</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "header-bar",
  components: {},
  data() {
    return {};
  }
});
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.header-bar {
  height: 60px;
  line-height: 60px;
  .header-box {
    align-items: center;
    .header-logo {
      display: flex;
      align-items: center;
      .logo-pic {
        margin-right: 32px;
        width: 100px;
        height: 40px;
        background-color: #8dc0e8;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 24px;
      }
      .checkout-region {
        .checkout-cxk {
          font-size: 12px;
          color: #999;
          height: 16px;
          line-height: 16px;
          text-align: center;
          cursor: pointer;
        }
        .checkout-position {
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          color: #000;
          text-align: center;
        }
      }
    }
    .quick-entry {
      display: flex;
      align-items: center;
      .enterprise {
        margin-right: 50px;
      }
      .phone-icon {
        margin-right: 8px;
      }
    }
  }
}
</style>

