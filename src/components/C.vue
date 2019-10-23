<template>
    <div>
        <h1>问卷调查表填写</h1>
        <p>2.请问你的兴趣爱好是：</p><br>
        <input type="checkbox" name="1" value="游泳" v-model="screen">游泳
        <input type="checkbox" name="2" value="看电影" v-model="screen">看电影
        <input type="checkbox" name="3" value="听音乐" v-model="screen">听音乐
        <input type="checkbox" name="4" value="跑步" v-model="screen">跑步
        <br>
        <input type="button" value="上一步" @click="stop()">
        <input type="button" value="下一步" @click="next()">
        <input type="button" value="重置" @click="redet()">
    </div>
</template>

<script>
    export default {
        name: "C",
        data(){
            return{
                screen:[]
            }
        },
        methods:{
            stop(){
                this.$router.push('/');
            },
            next(){
                console.log(this.screen)
                this.$store.commit("user",{screen:this.screen});
                this.$router.push('/D');
            },
            redet(){
                this.screen=[];
            }
        }
    }
</script>

<style scoped>

</style>