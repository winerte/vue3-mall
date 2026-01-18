<template>
    <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in cardData" :key="index">
            <el-card class="box-card mt-3 mb-3" shadow="hover">
                <template #header>
                    <div class="flex justify-between text-sm">
                        <span>{{ item.title }}</span>
                        <el-tag :type="item.unitColor">{{ item.unit }}</el-tag>
                    </div>
                </template>
                <div class=" text-3xl">
                    {{ item.value }}
                </div>

                <el-divider></el-divider>
                <div class="flex justify-between text-gray-400 font-medium text-sm">
                    <span>{{ item.subTitle }}</span>
                    <span>{{ item.subValue }}</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <IndexNavs></IndexNavs>
    <el-row :gutter="20">
        <el-col :span="12">
            <IndexChart></IndexChart>

        </el-col>
        <el-col :span="12">
            <IndexCard title="店铺及商品提示" content="店铺及商品提示" :btns="goods"></IndexCard>
            <IndexCard title="店铺及商品提示" content="店铺及商品提示" :btns="order"></IndexCard>
        </el-col>
    </el-row>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { statistics1, statistics2 } from '../api/index'
import IndexNavs from '～/components/IndexNavs.vue'
import IndexChart from '～/components/IndexChart.vue'
import IndexCard from '～/components/IndexCard.vue'

const cardData = ref([])


statistics1()
    .then(res => {
        //console.log(res);
        cardData.value = res.panels
    })

const goods = ref([])
const order = ref([])

statistics2()
    .then(res => {
        //console.log(res);
        goods.value = res.goods
        order.value = res.order
    })
</script>

<style scoped></style>