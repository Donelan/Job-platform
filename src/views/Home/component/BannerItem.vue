<template>
  <div class="home-banner common">
    <div class="nav-tab">
      <ul>
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="current === index ? 'current':''"
        >{{item.label}}</li>
      </ul>
    </div>
    <div class="home-main">
      <div class="main-category fl">
        <ul>
          <li>
            <span class="all-category fl">全部分类</span>
            <span class="menu-category fr">菜单</span>
          </li>
          <li v-for="(firstItem,firstIndex) in categoryList" :key="firstIndex">
            <span v-for="(item,index) in firstItem" :key="index">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="main-content fr">
        <div class="content-picture">
          <img :src="require('@/assets/banner.png')">
        </div>
        <div class="content-tabs">
          <ul>
            <li class="current">政策咨询</li>
            <li>通知公告</li>
            <li>培训活动</li>
            <li>社区专栏</li>
          </ul>
        </div>
        <div class="content-desc">
          <div
            class="content-desc-box"
            v-for="(firstItem,firstIndex) in contentList"
            :key="firstIndex"
          >
            <ul>
              <li v-for="(item,index) in firstItem" :key="index">
                <span class="fl circle"></span>
                <span class="fl">{{item[0]}}</span>
                <span class="fr">{{item[1]}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="home-logo">
      <img :src="require('@/assets/分栏图.png')" alt="">
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BannerItem",
  components: {},
  data() {
    return {
      current: 0,
      navList: [
        {
          label: "首页"
        },
        {
          label: "职位搜索"
        },
        {
          label: "政策咨询"
        },
        {
          label: "通知公告"
        },
        {
          label: "培训活动"
        },
        {
          label: "社区专栏"
        },
        {
          label: "联系我们"
        }
      ],
      categoryList: [
        ["销售", "市场", "客服", "贸易"],
        ["经营管理", "人事", "行政", "财务"],
        ["生产", "质管", "技工", "物流"],
        ["教育", "法律", "咨询", "翻译"],
        ["零售", "家政", "餐饮", "旅游"],
        ["广告", "媒体", "艺术", "出版"],
        ["金融", "保险"],
        ["医疗", "制药", "环保", "化工"],
        ["建筑", "房地产", "物业管理"],
        ["电子", "能源", "机械", "纺织"]
      ],
      contentList: [
        [
          ["西安市青少年事务公益性岗位招聘公告", "05-06"],
          ["圣水镇人民政府关于招聘公益性岗位的公告", "04-24"],
          ["2019中国铁路西安局集团招聘公告（992人）", "03-20"],
          ["2019中交一公局西北工程有限公司招聘公告", "03-12"]
        ],
        [
          ["西安市青少年事务公益性岗位招聘公告", "05-06"],
          ["圣水镇人民政府关于招聘公益性岗位的公告", "04-24"],
          ["2019中国铁路西安局集团招聘公告（992人）", "03-20"],
          ["2019中交一公局西北工程有限公司招聘公告", "03-12"]
        ]
      ]
    };
  }
});
</script>
<style rel="stylesheet/scss" lang="scss"  scoped>
.home-banner {
  .nav-tab {
    height: 50px;
    border-bottom: 2px solid #1b82d2;
    ul {
      overflow: hidden;
      li {
        float: left;
        width: 150px;
        text-align: center;
        line-height: 50px;
        height: 100%;
        font-size: 20px;
        cursor: pointer;
        &.current {
          background-color: #1b82d2;
          color: #fff;
        }
      }
    }
  }
  .home-main {
    margin-top: 20px;
    overflow: hidden;
    .main-category {
      width: 240px;
      background-color: #fafafa;
      padding: 10px;
      height: 418px;
      box-sizing: border-box;
      ul {
        width: 100%;
        li {
          width: 100%;
          height: 37px;
          border-bottom: 1px solid #ebebeb;
          line-height: 38px;
          color: #4d4d4d;
          font-size: 15px;
          text-align: left;
          padding: 0 6px;
          box-sizing: border-box;
          &:nth-last-of-type(1) {
            border-bottom: none;
          }
          span {
            display: inline-block;
            height: 15px;
            padding: 0 6px;
            border-right: 1px solid #4c4c4c;
            line-height: 15px;
            &:nth-last-of-type(1) {
              border-right: none;
            }
            &.all-category,
            &.menu-category {
              border-right: none;
              line-height: 38px;
            }
          }
        }
      }
    }
    .main-content {
      width: 940px;
      height: 378px;
      .content-picture {
        height: 240px;
        width: 100%;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .content-tabs {
        margin-top: 20px;
        ul {
          overflow: hidden;
          border-bottom: 1px solid #ebebeb;
          li {
            border-top: 1px solid #ebebeb;
            border-left: 1px solid #ebebeb;
            width: 149px;
            float: left;
            height: 38px;
            line-height: 38px;
            text-align: center;
            color: #000;
            font-size: 16px;
            cursor: pointer;
            &.current {
              color: #1b82d2;
            }
            &:nth-of-type(1) {
              border-radius: 4px 0px 0px 0px;
            }
            &:nth-last-of-type(1) {
              border-radius: 0px 4px 0px 0px;
              border-right: 1px solid #ebebeb;
            }
          }
        }
      }
      .content-desc {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        .content-desc-box {
          width: 433px;
          ul {
            li {
              overflow: hidden;
              font-size: 16px;
              height: 28px;
              line-height: 28px;
              .circle {
                width: 0px;
                height: 0px;
                border: 3px solid #000;
                border-radius: 50%;
                margin-top: 12px;
                margin-right: 9px;
              }
            }
          }
        }
      }
    }
  }
  .home-logo {
    margin-top: 20px;
    height: 80px;
    border: 1px solid #ebebeb;
    width: 100%;
    box-sizing: border-box;
    img {
      height: 100%;
      width: 100%;
      display: block;
    }
  }
}
</style>