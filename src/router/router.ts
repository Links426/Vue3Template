const routes = [
    {
        path: '/',
        component: () => import('@/views/index/index.vue'),
        redirect: '/main',
        meta: { label: '主页' },
        children: [],
    },
]
export default routes
