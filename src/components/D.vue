<template>
    <div>
        <h1>问卷调查表填写</h1>
        <p>3.请介绍一下你自己：</p><br>
        <textarea rows="5" cols="20" v-model="caches"></textarea><br>
        <input type="button" value="上一步" @click="stop()">
        <input type="button" value="提交" @click="next()">
        <input type="button" value="重置" @click="jun()">
    </div>
</template>

<script>
    export default {
        name: "D",
        data(){
            return{
                caches:''
            }
        },
        methods:{
            stop(){
                this.$router.push('/C');
            },
            next(){
                console.log(this.caches)
                this.$store.commit("user",{caches:this.caches});
                this.$router.push('/B');
            },
            jun(){
                this.caches='';
            }
        }

    }
</script>

<style scoped>

</style>