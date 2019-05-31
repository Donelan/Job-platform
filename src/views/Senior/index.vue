<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    NavBar
  }
})
export default class Senior extends Vue {
  created() {
    console.log("SeniorPage");
  }
  // 跳转页面
}
</script>
