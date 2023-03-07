// 1. 导入
import { createRouter, createWebHashHistory } from 'vue-router'
// 2. 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/index/index.vue'),
        },
    ],
})
// 3. 导出
export default router
