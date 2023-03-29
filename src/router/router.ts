const routes = [
    {
        path: '/',
        component: () => import('@/views/index/index.vue'),
        redirect: '/main',
        meta: { label: '主页' },
        children: [
            {
                path: '/main',
                name: '工作台',
                component: () => import('@/views/main/main.vue'),
                meta: { label: '工作台' },
            },
            {
                path: '/data',
                name: '数据可视化',
                redirect: '/data/analyse',
                meta: { label: '数据可视化' },
                children: [
                    {
                        path: 'analyse',
                        name: '分析页',
                        component: () => import('@/views/data/analyse.vue'),
                        meta: { label: '分析页' },
                    },
                ],
            },
            {
                path: '/personal',
                name: '个人中心',
                redirect: '/personal/info',
                meta: {
                    label: '个人中心',
                },
                children: [
                    {
                        path: 'info',
                        name: '个人信息',
                        component: () => import('@/views/personal/info.vue'),
                        meta: { label: '个人信息' },
                    },
                    {
                        path: 'setting',
                        name: '个人设置',
                        component: () => import('@/views/personal/setting.vue'),
                        meta: { label: '个人设置' },
                    },
                ],
            },
        ],
    },
]
export default routes
