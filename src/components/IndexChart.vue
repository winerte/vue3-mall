<template>
    <div class="mt-5">
        <el-card shadow="hover">
            <template #header>
                <div class="flex justify-between ">
                    <span>订单统计</span>
                    <div>
                        <el-check-tag v-for="(item, index) in tagList" :key="index" @click="handleChoose(item.value)"
                            :checked="item.value == checked" style="margin-right: 8px">
                            {{ item.label }}
                        </el-check-tag>
                    </div>
                </div>
            </template>
            <div id="chart" style="width: 100%;height: 300px;">

            </div>
        </el-card>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { statistics3 } from '../api/index'
import * as echarts from 'echarts';
const tagList = reactive([
    {
        label: '近一个月',
        value: 'month'
    },
    {
        label: '近1周',
        value: 'week'
    },
    {
        label: '近24小时',
        value: 'hour'
    }
])

const checked = ref('week')
const handleChoose = (value) => {
    console.log(value)
    checked.value = value
    statistics3(checked.value).then(res => { 
    option.xAxis.data = res.x
    option.series[0].data = res.y
    option && myChart.setOption(option);
})
}
let myChart = null
onMounted(() => {
    let  chartDom = document.getElementById('chart');
    myChart = echarts.init(chartDom);
    statistics3(checked.value).then(res => { 
    option.xAxis.data = res.x
    option.series[0].data = res.y
    option && myChart.setOption(option);
})
})


let  option;
option = {
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
};


</script>