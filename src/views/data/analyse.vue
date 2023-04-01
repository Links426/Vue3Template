<template>
    <div><TotalBoard /></div>
</template>
<script setup lang="ts">
import TotalBoard from '@/views/data/components/analyse-totalBoard.vue'
</script>

<style scoped>
.analyse-normal {
    background: linear-gradient(
        180deg,
        rgb(var(--arcoblue-1)) -3%,
        rgb(var(--arcoblue-1)) 100%
    );
}
.analyse-special {
    background: linear-gradient(
        180deg,
        rgb(var(--green-1)) 2%,
        rgb(var(--green-1)) 100%
    );
}
.analyse-total {
    background: linear-gradient(
        180deg,
        rgb(var(--red-1)) -3%,
        rgb(var(--red-1)) 100%
    );
}
.main-bg {
    background: var(--color-bg-2);
    color: var(--color-neutral-10);
}
.decrease {
    color: rgb(var(--red-5));
}
.increase {
    color: rgb(var(--green-6));
}
</style>
