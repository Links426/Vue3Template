<template>
    <div flex flex-col h-100vh min-w-800px>
        <!-- 顶部nav -->
        <div class="h-70px items-center navContainer">
            <!-- logo -->
            <img src="@/assets/logo.svg" />
            <!-- 选择页面 -->
            <div class="text-14px flex justify-center">
                <div>日历</div>
            </div>
            <div class="ml-auto flex items-center">
                <i class="iconfont icon-tongzhi2 text-#9CB2CD"></i>
                <div ml-34px flex items-center>
                    <div class="rounded w-46px h-46px bg-#4E8AFA"></div>
                    <div ml-10px>
                        <div>Links</div>
                        <div class="text-#9CB2CD">Administrator</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 主体内容 -->
        <div w-full flex-1>
            <div class="leftContainer">
                <!-- 顶部日历 -->
                <div w-240px>
                    <div mb-20px text-18px>Calendar</div>
                    <div
                        class="flex justify-center justify-around bg-#EFF6FF py-8px rounded-24px mb-20px"
                    >
                        <div>Day</div>
                        <div>Week</div>
                        <div>Month</div>
                    </div>
                    <div flex justify-between mb-18px>
                        <div>123</div>
                        <div>123</div>
                        <div>123</div>
                    </div>
                    <!-- 顶部日期 -->
                    <div class="flex text-#9CB2CD mb-20px">
                        <view
                            v-for="day in DAY_TYPE_LIST"
                            :key="day.index"
                            w-34px
                            text-center
                            >{{ day.value }}</view
                        >
                    </div>
                    <!-- 下方日期 -->
                    <div flex flex-wrap>
                        <div
                            v-for="(item, index) in oneMonthArr"
                            :key="index"
                            class="w-34px mb-16px text-center text-#9CB2CD"
                        >
                            {{ item.date }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { getTime } from '@/service/getTime'
import { computed, reactive, ref } from 'vue'
import { DAY_TYPE_LIST } from '@/utils/constant'

// 获取当前的月份和年份
const date = new Date()
const { year, month } = getTime(date)

// 获取上个月最后一天的时间戳
const currentLastDayRaw: any = new Date(year, month, 0)

const lastDay: any = computed(() => {
    return Date.parse(currentLastDayRaw)
})

const oneDay = 24 * 60 * 60 * 1000
const oneMonthArr: any = reactive([])
const getCurrentMonth = () => {
    for (let i = 0; i < 42; i++) {
        oneMonthArr.push({
            date: new Date(lastDay.value + i * oneDay).getDate(),
            month: new Date(lastDay.value + i * oneDay).getMonth() + 1,
            year: new Date(lastDay.value + i * oneDay).getFullYear(),
            day: new Date(lastDay.value + i * oneDay).getDay(),
        })
    }
}
getCurrentMonth()
const index = ref(1)

const getNextCurrentMonth = () => {
    // reactive 数组 只能通过 Array.length = 0,清空
    oneMonthArr.length = 0
    for (let i = 0; i < 42; i++) {
        oneMonthArr.push({
            date: new Date(
                lastDay.value + 42 * index.value * oneDay + i * oneDay
            ).getDate(),
            month:
                new Date(
                    lastDay.value + 42 * index.value * oneDay + i * oneDay
                ).getMonth() + 1,
            year: new Date(
                lastDay.value + 42 * index.value * oneDay + i * oneDay
            ).getFullYear(),
            day: new Date(
                lastDay.value + 42 * index.value * oneDay + i * oneDay
            ).getDay(),
        })
    }
    console.log(oneMonthArr)

    index.value++
}
</script>

<style scoped>
.navContainer {
    display: grid;
    padding: 0 30px;
    grid-template-columns: 300px auto 300px;
    box-shadow: 0px 1px 0px 0px #d7e3f1;
}
.iconfont {
    font-size: 30px;
}
.overScroll {
    overflow: scroll;
}
.leftContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    padding: 30px 15px;
    height: 100%;
    box-shadow: inset -1px 0px 0px 0px #d7e3f1;
}
</style>
