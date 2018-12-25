<template>
  <el-tabs type="border-card">
    <el-tab-pane label="叶子">
      <Content slot-key="yetimeline"/>

    </el-tab-pane>
    <el-tab-pane label="小芳">
      <Content slot-key="fang_timeline"/>
    </el-tab-pane>
  </el-tabs>
</template>



<script>
export default {
  name:"pageCard"
};
</script>