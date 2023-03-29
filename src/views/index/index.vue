<template>
    <a-layout style="height: 100vh">
        <a-layout-header h-60px flex items-center px-24px class="header-shadow"
            >Mechanical Pro</a-layout-header
        >
        <a-layout>
            <a-layout-sider
                breakpoint="lg"
                :width="220"
                collapsible
                :collapsed="collapsed"
                @collapse="onCollapse"
            >
                <div />
                <a-menu
                    :defaultOpenKeys="['0']"
                    :defaultSelectedKeys="['0_0']"
                    @menu-item-click="To"
                >
                    <a-sub-menu key="0">
                        <template #icon><icon-apps></icon-apps></template>
                        <template #title>仪表台</template>
                        <a-menu-item key="0_0">工作台</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="1">
                        <template #icon><icon-apps></icon-apps></template>
                        <template #title>数据可视化</template>
                        <a-menu-item key="1_0">分析页</a-menu-item>
                        <a-menu-item key="1_1">多维数据分析</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="2">
                        <template #icon><icon-apps></icon-apps></template>
                        <template #title>个人中心</template>
                        <a-menu-item key="2_0">用户信息</a-menu-item>
                        <a-menu-item key="2_1">用户设置</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout-content class="p-20px content-bg">
                <a-breadcrumb :routes="routesList">
                    <template #item-render="{ route, paths }">
                        <span @click="toBrumbPage(paths)">{{
                            route.meta.label
                        }}</span>
                    </template>
                </a-breadcrumb>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup lang="ts">
const router = useRouter()

const collapsed = ref(false)

const routesList: any = ref([])
const onCollapse = (val: boolean, type: string) => {
    collapsed.value = val
}

const To = (key: string) => {
    if (key === '0_0') {
        router.push('/main')
    } else if (key === '1_0') {
        router.push('/data/analyse')
    } else if (key === '2_0') {
        router.push('/personal/info')
    } else if (key === '2_1') {
        router.push('/personal/setting')
    }
}

const useKeys = ['path', 'meta']
onBeforeRouteUpdate((to: any) => {
    const newArr: any = []
    to.matched.forEach((item) => {
        const list = Object.entries(item).filter(([key]) =>
            useKeys.includes(key)
        )
        const newItem = Object.fromEntries(list)
        newArr.push(newItem)
    })
    routesList.value = newArr
})

const toBrumbPage = (paths: string | any[]) => {
    router.push('/' + paths[paths.length - 1])
}

onMounted(() => {
    const newArr: any = []
    router.currentRoute.value.matched.forEach((item) => {
        const list = Object.entries(item).filter(([key]) =>
            useKeys.includes(key)
        )
        const newItem = Object.fromEntries(list)
        newArr.push(newItem)
    })
    routesList.value = newArr
})
</script>

<style scoped>
.header-shadow {
    z-index: 10;
    box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06),
        0px 1px 0px 0px #e5e6eb;
}
.content-bg {
    background-color: var(--color-neutral-1);
}
</style>
