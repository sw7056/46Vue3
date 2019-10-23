<template>
  <div>
    <p>问卷调查表填写</p>
    <h3>你的性别是：{{this.$store.state.user[0].onabort}}</h3>
    <h3>你的爱好是：{{this.$store.state.user[1].screen}}</h3>
    <h3>个人简介：{{this.$store.state.user[2].caches}}</h3>
  </div>
</template>

<script>
  export default {
  name: 'B',

}
</script>
