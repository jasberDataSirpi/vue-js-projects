<template>
<div class="appdiv">
<Header @click-add="clickAdd" :showTaskForm="showTaskForm" />

<router-view :showTaskForm="showTaskForm"></router-view>

<Footer />
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"
import Home from "./pages/Home.vue"
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home,
  },
  data(){
        return {
            showTaskForm:false
        }
    },
  methods:{
    clickAdd(){
this.showTaskForm=!this.showTaskForm;
    },
    }
    // created(){
    //     this.tasks=[
    //         {
    //             id:0,
    //             text:"Jasber",
    //             day:"friday",
    //             reminder:true,
    //         },
    //         {
    //             id:1,
    //             text:"Jaison",
    //             day:"monday",
    //             reminder:true,
    //         },
    //         {
    //             id:2,
    //             text:"ANANd",
    //             day:"sunday",
    //             reminder:false,
    //         },
    //     ]
    // },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
    color: #fff;
    /* background-color: #0d6efd; */
    /* border-color: #0d6efd; */
}
.appdiv{
    border: 5px solid rgb(0, 0, 0);
    padding: 5px;
}
</style>
