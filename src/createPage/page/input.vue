<template>
    <div>
        <el-form :inline="true">
            
                <el-form-item label="用户名">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
            
                <el-form-item label="appid">
                    <el-input v-model="formData.appid"></el-input>
                </el-form-item>
            
                <el-form-item label="年龄">
                    <el-input v-model="formData.age"></el-input>
                </el-form-item>
            
                <el-form-item label="业务名称">
                    <el-input v-model="formData.busseness"></el-input>
                </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
    },
    methods: {},
    created() {},
    mounted() {}
}
</script>

<style lang="scss" scoped>
</style>