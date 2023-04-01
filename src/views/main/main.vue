<template>
    <div><MainData mb-16px /> <MainMessage /></div>
</template>
<script setup lang="ts">
import MainData from '@/views/main/components/main-data.vue'
import MainMessage from '@/views/main/components/main-message.vue'
</script>

<style scoped>
.main-bg {
    background: var(--color-bg-2);
    color: var(--color-neutral-10);
}
.main-bg-avater {
    background: var(--color-neutral-1);
}
.main-bg-total-border {
    border-right: 1px solid var(--color-neutral-3);
}
.iconfont {
    font-size: 28px;
    color: rgb(var(--arcoblue-5));
}
</style>
