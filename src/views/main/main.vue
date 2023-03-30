<template>
    <div class="w-full min-w-800px h-548px p-20px main-bg">
        <div text-20px font-500>👏 欢迎回来，李宇恒 老师</div>
        <a-divider :margin="16" />
        <div flex>
            <div v-for="data in mainTotalList" :key="data.id" flex w-full>
                <div w-full min-w-300px h-100px p-20px flex items-center>
                    <div
                        class="w-54px h-54px mr-30px rounded main-bg-avater"
                    ></div>
                    <div>
                        <div text-12px mb-6px>{{ data.name }}</div>
                        <div text-22px font-bold>
                            {{ data.value }} <span ml-14px>个</span>
                        </div>
                    </div>
                    <div
                        class="main-bg-total-border w-1px h-full ml-70px mr-12px"
                        v-if="data.id < 3"
                    ></div>
                </div>
            </div>
        </div>
        <a-divider :margin="16" />
    </div>
</template>
<script setup lang="ts">
const mainTotalList = [
    { id: 0, name: '注册学生总数', icon: '', value: '2383' },
    { id: 1, name: '本周活动学生', icon: '', value: '368' },
    { id: 2, name: '日活学生', icon: '', value: '112' },
    { id: 3, name: '较昨日新增', icon: '', value: '3.3%' },
]
</script>

<style scoped>
.main-bg {
    background: var(--color-bg-2);
    color: var(--color-neutral-10);
}
.main-bg-avater {
    background: var(--color-neutral-2);
}
.main-bg-total-border {
    background: var(--color-neutral-3);
}
</style>
