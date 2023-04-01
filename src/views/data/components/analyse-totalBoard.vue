<template>
    <div class="w-full p-20px main-bg">
        <div text-16px font-500 mb-16px>舆情分析</div>
        <div flex h-134px>
            <!-- 访问人数 -->
            <div class="w-25% mr-20px p-16px rounded-2px flex analyse-normal">
                <div>
                    <div font-500 mb-24px>访问总人数</div>
                    <div text-24px font-bold mb-4px>12256</div>
                    <div>
                        <span>较昨日</span
                        ><span font-bold ml-8px class="increase"
                            ><span>+</span>206</span
                        >
                    </div>
                </div>

                <div flex-1 flex-center h-100px>
                    <AEcharts :options="totalPeople" />
                </div>
            </div>
            <!-- 内容发布量 -->
            <div class="w-25% mr-20px p-16px rounded-2px flex analyse-special">
                <div>
                    <div font-500 mb-24px>内容发布量</div>
                    <div text-24px font-bold mb-4px>12256</div>
                    <div>
                        <span>较昨日</span
                        ><span font-bold ml-8px class="increase"
                            ><span>+</span>206</span
                        >
                    </div>
                </div>

                <div h-100px flex-1>
                    <AEcharts w-full :options="publishNum" />
                </div>
            </div>

            <!-- 评论总量 -->
            <div class="w-25% mr-20px p-16px rounded-2px flex analyse-total">
                <div>
                    <div font-500 mb-24px>评论总量</div>
                    <div text-24px font-bold mb-4px>12256</div>
                    <div>
                        <span>较昨日</span
                        ><span font-bold ml-8px class="increase"
                            ><span>+</span>206</span
                        >
                    </div>
                </div>

                <div h-100px flex-1>
                    <AEcharts :options="totalPeople" />
                </div>
            </div>

            <!-- 分享总量 -->
            <div class="w-25% mr-20px p-16px rounded-2px flex analyse-normal">
                <div>
                    <div font-500 mb-24px>评论总量</div>
                    <div text-24px font-bold mb-4px>12256</div>
                    <div>
                        <span>较昨日</span
                        ><span font-bold ml-8px class="increase"
                            ><span>+</span>206</span
                        >
                    </div>
                </div>

                <div h-100px flex-1>
                    <AEcharts :options="totalShare" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import AEcharts from '@/components/EChartsComponents/a-echarts.vue'
const totalPeople = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            show: false, //刻度线
        },
        axisLine: {
            show: false, //隐藏y轴
        },
        axisLabel: {
            show: false, //隐藏刻度值
        },
        splitLine: { show: false },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false, //刻度线
        },
        axisLine: {
            show: false, //隐藏y轴
        },
        axisLabel: {
            show: false, //隐藏刻度值
        },
        splitLine: { show: false },
    },
    series: [
        {
            data: [12, 37, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
        },
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
}
const publishNum = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '',
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false, //刻度线
            },
            axisLine: {
                show: false, //隐藏y轴
            },
            axisLabel: {
                show: false, //隐藏刻度值
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false, //刻度线
            },
            axisLine: {
                show: false, //隐藏y轴
            },
            axisLabel: {
                show: false, //隐藏刻度值
            },
            splitLine: { show: false },
        },
    ],
    series: [
        {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [100, 283, 231, 182, 113, 123, 209, 283, 231, 182, 113, 123],
        },
    ],
}

const totalShare = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        show: false,
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 2,
                borderColor: '#fff',
                borderWidth: 1,
            },
            label: {
                show: false,
            },

            emphasis: {
                label: {
                    show: false,
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
            ],
        },
    ],
}
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
