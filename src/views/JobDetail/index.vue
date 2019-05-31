<template>
  <div class="job-detail common">
    <div class="job-detail-logo">
      <div class="job-logo">
        <div class="job-name-money">
          <div class="job-name fl">保安形象岗</div>
          <div class="job-money fr">3.2K-4k</div>
        </div>
        <div class="job-update-timer">2019-05-13 16:23:12 刷新</div>
        <require-block :list="['西安','经验不限','学历不限']" style="margin-bottom:20px"></require-block>
        <welfare-block style="margin-bottom:30px"></welfare-block>
      </div>
      <div class="job-company"></div>
    </div>
    <div class="job-detail-content">
      <div class="detail-content-title">职位描述：</div>
      <div class="detail-content-desc">
        <p>招聘要求</p>
        <p>1、年龄20-35岁初中以上学历，持保安证优先；</p>
        <p>2、具有保安、安全员工作经验优先；</p>
        <p>3、具有良好的服务意识，能适应较大的工作压力；</p>
        <p>4、夜班岗55岁一下</p>
        <p>工作内容：</p>
        <p>1、熟练掌握安全员岗位礼仪；</p>
        <p>2、车场保安服务岗熟练掌握交通指挥手势军礼、动作标准；</p>
        <p>3、夜班岗上班时间为晚八点到次日早8点；</p>
        <p>薪资待遇：3500-4000</p>
        <p>上班时间：早09：00-24:00 月休四天</p>
        <p>上班地点：2号线安远门地铁口附近，静安国际广场商业住宅一体化；</p>
      </div>
      <div class="detail-content-title">职位描述：</div>
      <div class="detail-content-desc">
        <p>亚特汽车会所逸圆店</p>
      </div>
      <div class="detail-content-title">投递要求：</div>
      <div class="detail-content-desc">
        <p>简历要求：中文</p>
        <p>截止日期：2019-06-13</p>
      </div>
    </div>
    <div class="job-detail-report">
      以担保或任何理由索要财务，扣押证照，均涉嫌违法。一经发现，
      <span class="report-button" @click="report">立即举报</span>
    </div>
    <div class="online-chat">在线聊</div>
    <div class="similar-job">
      <div>相似职务</div>
    </div>
    <div class="flex between wrap mt-20">
      <post-card v-for="(item,index) in list" :key="index" :name="item.name" :money="item.money"></post-card>
    </div>
  </div>
</template>
<script lang="ts">
import WelfareBlock from "@/components/Components/WelfareBlock.vue";
import RequireBlock from "@/components/Components/RequireBlock.vue";
import IntroduceBlock from "@/components/Components/IntroduceBlock.vue";
import ChatButton from "@/components/Components/ChatButton.vue";
import PostCard from "@/components/Components/PostCard.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    WelfareBlock,
    RequireBlock,
    IntroduceBlock,
    ChatButton,
    PostCard
  }
})
export default class SeniorSearch extends Vue {
  // 跳转页面
  report() {
    alert("举报成功！");
  }
  private list = [
    {
      name: "电子工程师",
      money: "7K-8K"
    },
    {
      name: "小区保安",
      money: "3K-4K"
    },
    {
      name: "食堂配菜员",
      money: "7K-8K"
    },
    {
      name: "食堂配菜员",
      money: "5K-6K"
    },
    {
      name: "大厦保洁",
      money: "3K-4K"
    },
    {
      name: "电工",
      money: "7K-8K"
    }
  ];
}
</script>
<style rel="stylesheet/scss" lang="scss"  scoped>
.job-detail {
  .job-detail-logo {
    padding-top: 40px;
    border-bottom: 1px solid #ebebeb;
    .job-logo {
      width: 380px;
      .job-update-timer {
        font-size: 16px;
        color: #4d4d4d;
        margin-bottom: 12px;
      }
      .job-name-money {
        overflow: hidden;
        font-size: 30px;
        margin-bottom: 20px;
        .job-name {
          color: #000;
        }
        .job-money {
          color: #f6ab00;
        }
      }
    }
  }
  .job-detail-content {
    .detail-content-title {
      font-size: 20px;
      color: #000;
      margin: 24px 0 12px 0;
    }
    .detail-content-desc {
      p {
        height: 28px;
        line-height: 28px;
        text-indent: 2em;
      }
    }
  }
  .job-detail-report {
    margin-top: 24px;
    height: 42px;
    line-height: 42px;
    padding-left: 40px;
    color: #f6ab00;
    background-color: #fffaf5;
    font-size: 14px;
    .report-button {
      color: #1b82d2;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .online-chat {
    margin: 60px auto 50px auto;
    height: 60px;
    width: 240px;
    text-align: center;
    text-align: center;
    line-height: 60px;
    color: #fff;
    background-color: #1b82d2;
    font-size: 18px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  .similar-job {
    font-size: 20px;
    color: #000;
  }
}
</style>
