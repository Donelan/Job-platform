<template>
  <div>
    <header-bar></header-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderBar from "@/components/HeaderBar/index.vue";
import FooterBar from "@/components/FooterBar/index.vue";
import { Component } from "vue-property-decorator";
@Component({
  components: {
    HeaderBar,
    FooterBar
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss">
</style>

