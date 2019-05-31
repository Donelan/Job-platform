<template>
  <div>
    <login-item></login-item>
    <search-item></search-item>
    <banner-item></banner-item>
    <post-item></post-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LoginItem from "./component/LoginItem.vue";
import SearchItem from "./component/SearchItem.vue";
import BannerItem from "./component/BannerItem.vue";
import PostItem from "./component/PostItem.vue";
import { Component } from "vue-property-decorator";
@Component({
  components: {
    LoginItem,
    SearchItem,
    PostItem,
    BannerItem
  }
})
export default class Home extends Vue {
  // 跳转页面
}
</script>
