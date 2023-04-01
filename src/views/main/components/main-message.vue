<template>
    <div flex>
        <div class="p-20px main-bg">
            <div text-16px font-500 mb-16px>详细数据</div>

            <a-radio-group v-model="size" type="button" mb-10px>
                <a-radio value="small">初级题</a-radio>
                <a-radio value="medium">中级题</a-radio>
                <a-radio value="large">高级题</a-radio>
            </a-radio-group>
            <a-table
                :columns="columns"
                :data="data"
                :filter-icon-align-left="alignLeft"
            />
        </div>
        <div class="p-20px main-bg ml-16px flex-1">
            <div font-500 text-16px>学生成绩概述</div>
            <div h-360px><aEcharts :options="options" /></div>
        </div>
    </div>
</template>
<script setup lang="ts">
const size = ref('medium')
const alignLeft = ref(false)

const columns: any = [
    {
        title: '序号',
        dataIndex: 'key',
        sortable: {
            sortDirections: ['ascend', 'descend'],
        },
    },
    {
        title: '题目',
        dataIndex: 'content',
    },
    {
        title: '错误量',
        dataIndex: 'address',
        sortable: {
            sortDirections: ['ascend', 'descend'],
        },
    },
    {
        title: '错误概率',
        dataIndex: 'email',
    },
]
const data = reactive([
    {
        key: '1',
        content: '请你说出 Vue3 的 算法',
        address: 322,
        email: '23%',
    },
    {
        key: '2',
        content: '请你说出 Vue3 的 算法',
        address: 302,
        email: '23%',
    },
    {
        key: '3',
        content: '请你说出 Vue3 的 算法',
        address: 255,
        email: '23%',
    },
    {
        key: '4',
        name: 'Ed Hellen',
        content: '请你说出 Vue3 的 算法',
        address: 123,
        email: '23%',
    },
    {
        key: '5',
        name: 'William Smith',
        content: '请你说出 Vue3 的 算法',
        address: 123,
        email: '23%',
    },
])
const options = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '5%',
        left: 'center',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold',
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
<style>
.pointer {
    cursor: pointer;
}
.main-bg {
    background: var(--color-bg-2);
    color: var(--color-neutral-10);
}
</style>
