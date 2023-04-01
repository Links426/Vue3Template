<template>
    <div class="w-full p-20px main-bg">
        <div text-20px font-500>👏 欢迎回来，李宇恒 老师</div>
        <a-divider :margin="16" />
        <div flex flex-wrap>
            <div
                class="w-50% h-100px mb-10px flex-center"
                :class="data.id % 2 === 0 ? 'main-bg-total-border' : ''"
                v-for="data in mainTotalList"
                :key="data.id"
            >
                <div flex items-center w-200px>
                    <div
                        class="w-60px h-60px rounded mr-20px flex-center main-bg-avater"
                    >
                        <i class="iconfont" :class="data.icon"></i>
                    </div>
                    <div>
                        <div text-12px mb-6px>{{ data.name }}</div>
                        <a-statistic
                            :value="data.value"
                            :value-from="0"
                            animation
                        >
                        </a-statistic>
                    </div>
                </div>
            </div>
        </div>
        <a-divider :margin="32" />
        <div w-full>
            <div font-500 text-18px ml-16px>学生成绩正确率</div>
            <div h-300px>
                <aEcharts :options="options" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import aEcharts from '@/components/EChartsComponents/a-echarts.vue'

const mainTotalList: any = [
    { id: 0, name: '注册学生总数', icon: 'icon-renliziyuan', value: 2383 },
    { id: 1, name: '本周活动学生', icon: 'icon-rizhi', value: 368 },
    { id: 2, name: '日活学生', icon: 'icon-shoucang', value: 112 },
    { id: 3, name: '较昨日新增', icon: 'icon-fenxiang', value: 330 },
]
const options = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [140, 232, 101, 264, 90, 340, 250],
        },
        {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(0, 221, 255)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(77, 119, 255)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [120, 282, 111, 234, 220, 340, 310],
        },
        {
            name: 'Line 3',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(55, 162, 255)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(116, 21, 219)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [320, 132, 201, 334, 190, 130, 220],
        },
        {
            name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 0, 135)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(135, 0, 157)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [220, 402, 231, 134, 190, 230, 120],
        },
        {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0,
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top',
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 191, 0)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(224, 62, 76)',
                    },
                ]),
            },
            emphasis: {
                focus: 'series',
            },
            data: [220, 302, 181, 234, 210, 290, 150],
        },
    ],
}
</script>

<style scoped>
.iconfont {
    font-size: 28px;
    color: rgb(var(--arcoblue-5));
}
.main-bg-avater {
    background: var(--color-neutral-1);
}
.main-bg-total-border {
    border-right: 1px solid var(--color-neutral-3);
}
</style>
