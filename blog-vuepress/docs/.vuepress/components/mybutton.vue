<template>
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">区分颜色</span>
  <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
</div>
</el-row>

</template>


<script>
export default {
  name:"mybutton",
  data() {
      return {
        value1: null,
        value2: null
      }
    }
  }
</script>
