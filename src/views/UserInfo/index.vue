<script setup lang="ts">
import { reactive } from 'vue';
import MainLayout from '@/components/MainLayout.vue';
const form = reactive({
    name: '',
    region: '',
    resource: '',
});

const onSubmit = () => {
    console.log('submit!');
};
</script>

<template>
    <MainLayout>
        <template #user>
            <div style="padding: 20px">
                <el-form
                    :model="form"
                    label-width="auto"
                    style="max-width: 600px"
                >
                    <el-form-item label="姓名">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="地区">
                        <el-select
                            v-model="form.region"
                            placeholder="请选择你所在的地区"
                        >
                            <el-option label="上海" value="shanghai" />
                            <el-option label="北京" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.resource">
                            <el-radio value="Sponsor">男</el-radio>
                            <el-radio value="Venue">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </template>
    </MainLayout>
</template>
