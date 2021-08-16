<template>
        <h1>LOGIN PAGE</h1>

    <div class="formdiv">
        <form @submit="onLogin">
            <div class="input-div">
                <label>Email id:</label>
                <input class="form-control" v-model="email" type="text" placeholder="email id">
                <span v-if="ee" style="color:red">{{ee}}</span>
            </div>
            <div class="input-div">
                <label>Password:</label>
                <input class="form-control" v-model="password" type="password" placeholder="password">
                <span v-if="pass" style="color:red">{{pass}}</span>
            </div>
            <div class="input-div">
                <button class="btn" type="submit">LOGIN</button>
                <span>OR <router-link to="/signup">SIGNUP</router-link></span>
            </div>
        </form>
        
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Login',
    data(){
        return {
            email:null,
            password:null,
            ee:null,
        pass:null,
        }
    },
    watch:{
         email(value){
            if(!value){
                this.ee="email id is required";
            }else{
                this.ee="";
            }
        },
         password(value){
            if(!value){
                this.pass="password is required";
            }else{
                this.pass="";
            }
        },
    },
    methods:{
       onLogin(e){
  e.preventDefault();  
   if(!this.email){
                this.ee="email id is required";
            }else{
                this.ee="";
            }
            if(!this.password){
                this.pass="password is required";
            }else{
                this.pass="";
            }
            
    if(!this.ee && !this.pass)
            {
   const loginData={
                email:this.email ? this.email : "",
                password:this.password ? this.password : ""
            }
            console.log(loginData);

axios.post('login',loginData)
  .then((response) => {
    console.log(response);
    console.log(response.status);
                 if(response.status==200){
                    // window.alert("logged in successfully");
                    localStorage.setItem('mail',response.data.email)
                    localStorage.setItem('id',response.data._id)
                      this.$router.push('home');
                }
                else{
                     window.alert("login not successfull");
                }
  })
  .catch((error) => {
                     window.alert("login not successfull");
    console.log(error);
  });
        
        }
        
        }
    
    },

}
</script>


<style scoped>
.form-control {
    display: block;
    width: 80%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn {
    display: inline-block;
    margin-top: 10px;
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
    background-color: #15b600;
    border-color: #38c700;
}
.formdiv{
    margin-top: 50px;
    margin-bottom: 50px;
}
.input-div{
margin: 20px;
}
</style>