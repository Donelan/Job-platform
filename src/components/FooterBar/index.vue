<template>
  <div class="footer-bar">
    <div class="common">
      <div class="footer-link">
        <span>友情链接</span>
      </div>
      <div class="footer-link-list">
        <ul class="flex between">
          <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="footer-introduce">
        <div>
          <img :src="require('@/assets/pic-dzjg.png')">
        </div>
        <div>
          <p>版权所有 职介平台 本网站所有招聘信息，未经书面授权不得转载 联系电话：029-12345789</p>
          <p>Copyright©2019 西安市神航星云科技有限公司 版权所有</p>
        </div>
        <div>
          <img :src="require('@/assets/未命名-2.gif')">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "footer-bar",
  components: {},
  data() {
    return {
      list: [
        "陕西人社网 ",
        "西安人力资源网  ",
        "西安市人社局   ",
        "全国公共招聘网    ",
        "陕西省人民政府   ",
        "中国人事考试网  ",
        "陕西省人力资源和社会保障厅 ",
        "陕西省民政厅  ",
        "陕西省林业厅"
      ]
    };
  }
});
</script>
<style rel="stylesheet/scss" lang="scss" >
.footer-bar {
  background-color: #fafafa;
  .footer-link {
    padding: 16px 0;
    span {
      font-size: 18px;
      padding-bottom: 8px;
      border-bottom: 2px solid #1b82d2;
    }
  }
  .footer-link-list {
    margin-top: 8px;
    ul {
      li {
        font-size: 16px;
        color: #1a1a1a;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          color: #1b82d2;
        }
      }
    }
  }
  .footer-introduce {
    width: 916px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 45px auto 0px auto;
    padding-bottom: 45px;
    p {
      text-align: center;
      font-size: 16px;
      color: #1a1a1a;
      line-height: 34px;
    }
  }
}
</style>