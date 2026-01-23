<script setup lang="ts">
const fetchUserData = async () => {
    try {
        const response = await fetch('/api/user/info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        //手动检查 HTTP 状态码
        // fetch认为 404/505 也是“成功”的请求，不会自动抛错
        if (!response.ok) {
            throw new Error(`HTTP error! sattus:${response.status}`);
        }

        // 手动解析json
        const data = await response.json();
        console.log('Fetch 成功拿到数据：', data);
        return data;
        
    } catch (error) {
        console.error('Fetch 请求失败:', error);
    }
};
</script>

<template></template>

<style></style>
