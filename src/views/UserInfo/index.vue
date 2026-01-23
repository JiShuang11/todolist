<script setup lang="ts">
import { reactive, ref } from 'vue';
import MainLayout from '@/components/MainLayout.vue';
import type { FormInstance, FormRules } from 'element-plus';

interface RuleForm {
    name: string;
    pass: string;
    checkPass: string;
    region: string;
    resource: string;
}

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
    name: '',
    pass: '',
    checkPass: '',
    region: '',
    resource: '',
});

// 自定义校验规则
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return;
            ruleFormRef.value.validateField('checkPass');
        }
        callback();
    }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};

// 校验规则
const rules = reactive<FormRules<RuleForm>>({
    name: [
        {
            required: true,
            message: '请输入正确的姓名',
            trigger: 'blur',
        },
        { min: 3, max: 5, message: '姓名长度要在3-5个字符', trigger: 'blur' },
    ],
    pass: [
        { validator: validatePass, trigger: 'blur' },
        {
            min: 6,
            max: 15,
            message: '密码长度要在6-15个字符',
            trigger: 'blur',
        },
    ],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    region: [
        {
            required: true,
            message: '请选择正确的地区',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: '请选项性别',
            trigger: 'change',
        },
    ],
});

// 表单校验
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('提交成功!');
        } else {
            console.log('提交失败!', fields);
        }
    });
};
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>
<template>
    <MainLayout>
        <template #user>
            <div style="padding: 20px">
                <el-form
                    ref="ruleFormRef"
                    style="max-width: 600px"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="auto"
                    class="demo-ruleForm"
                >
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input
                            v-model="ruleForm.pass"
                            type="password"
                            autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input
                            v-model="ruleForm.checkPass"
                            type="password"
                            autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item label="地区" prop="region">
                        <el-select
                            v-model="ruleForm.region"
                            placeholder="请选择你所在的地区"
                        >
                            <el-option label="上海" value="shanghai" />
                            <el-option label="北京" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="性别" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio value="Sponsor">男</el-radio>
                            <el-radio value="Venue">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            @click="submitForm(ruleFormRef)"
                        >
                            提交
                        </el-button>
                        <el-button @click="resetForm(ruleFormRef)"
                            >重置</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
        </template>
    </MainLayout>
</template>
