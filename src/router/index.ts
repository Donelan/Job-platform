import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home/page'
        },
        // 主页面
        {
            path: "/home",
            component: Layout,
            children: [
                {
                    path: "page",
                    component: () => import("@/views/Home/index.vue"),
                }
            ]
        },
        // 下载页面
        {
            path: "/download",
            component: () => import("@/views/Download/index.vue"),
        },

        // 高级搜索详情
        {
            path: "/home",
            component: Layout,
            children: [
                {
                    path: "senior",
                    component: () => import("@/views/Senior/index.vue"),
                    children: [
                        {
                            path: "search",
                            component: () => import("@/views/Search/index.vue"),
                        }
                    ]
                }
            ]
        },
        // 岗位详情
        {
            path: "/home",
            component: Layout,
            children: [
                {
                    path: "job",
                    component: () => import("@/views/Senior/index.vue"),
                    children: [
                        {
                            path: "detail",
                            component: () => import("@/views/JobDetail/index.vue"),
                        }
                    ]
                }
            ]
        },
        // 公司详情
        {
            path: "/home",
            component: Layout,
            children: [
                {
                    path: "company",
                    component: () => import("@/views/Senior/index.vue"),
                    children: [
                        {
                            path: "detail",
                            component: () => import("@/views/CompanyDetail/index.vue"),
                        }
                    ]
                }
            ]
        },
    ]
})