<template>
  <div>
    <h1>问卷调查表填写</h1>
    <p>1.请问你的性别是：</p><br>
    <input type="radio" name="sex" value="男" v-model="onabort">男
    <input type="radio" name="sex" value="女" v-model="onabort">女
    <input type="radio" name="sex" value="保密" v-model="onabort">保密<br>
    <input type="button" value="下一步" @click="next()">
    <input type="button" value="重置" @click="redet()">
  </div>
</template>

<script>
  export default {
    name: "A",
    data(){
      return{
        onabort:"男",
      }
    },
    methods:{
      next(){
        console.log(this.onabort);
        this.$store.commit("user",{onabort:this.onabort});
        this.$router.push('/C')

      },
      read(){
        this.onabort="男"

      }
    }

  }
</script>
