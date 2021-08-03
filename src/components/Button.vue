<template>
    <button :style="{background:color}" @click="onClick()" class="btn">{{text}}</button>
</template>

<script>
export default {
    name:'Button',
    props:{
        text:String,
        color:{
            type:String,
            default:'#0d6efd'
        },
    },
    methods:{
        onClick(){
            console.log("jasberraja");
        }
    },
}
</script>

<style scoped>
.btn{
    margin-right: 10px;
}
</style>