<template>
       <h1>SIGNUP PAGE</h1>

   <div class="formdiv">
        <form @submit="onSignup">
            <div>
                <label for="firstname">First Name</label>
                <input v-model="firstName" class="form-control" id="firstname" type="text" placeholder="First name">
                <span v-if="fn" style="color:red">{{fn}}</span>
            </div>
             <div>
                <label for="lastname">Last Name</label>
                <input v-model="lastName" class="form-control" id="lastname" type="text" placeholder="lastname">
                <span v-if="ln" style="color:red">{{ln}}</span>
            </div>
            <div>
                <label for="company">Company</label>
                <input v-model="company" class="form-control" id="company" type="text" placeholder="company">
                <span v-if="com" style="color:red">{{com}}</span>
            </div>
            <div>
                <label>Email id:</label>
                <input class="form-control" v-model="email" type="email" placeholder="email id">
                <span v-if="ee" style="color:red">{{ee}}</span>
            </div>
            <div>
                <label>Password:</label>
                <input class="form-control" v-model="password" type="password" placeholder="password">
                <span v-if="pass" style="color:red">{{pass}}</span>
            </div>
            <div>
                <label>Re Enter Password:</label>
                <input class="form-control" v-model="rePass" type="password" placeholder="re enter password">
                <span v-if="rpass" style="color:red">{{rpass}}</span>
            </div>
            <div>
                <button class="btn" type="submit">SIGNUP</button>
                <span>OR <router-link to="/">Login</router-link></span>
            </div>
        </form>
        
        
    </div>
</template>

<script>
export default {
    name:'Signup',
    data(){
return{
    firstName:null,
    lastName:null,
    company:null,
    email:null,
    password:null,
    rePass:null,
    
        fn:null,
        ln:null,
        com:null,
        ee:null,
        pass:null,
        rpass:null,
    
}
    },
    watch:{
        firstName(value){
            if(!value){
                this.fn="first name is required";
            }else{
                this.fn="";
            }
        },
         lastName(value){
            if(!value){
                this.ln="last name is required";
            }else{
                this.ln="";
            }
        },
         company(value){
            if(!value){
                this.com="company is required";
            }else{
                this.com="";
            }
        },
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
         rePass(value){
            if(!value){
                this.rpass="re enter password is required";
            }else{
                this.rpass="";
            }
        },
    },
    methods:{

        onSignup(e){
  e.preventDefault();     

            if(!this.firstName){
                this.fn="first name is required";
            }else{
                this.fn="";
            }
            if(!this.lastName){
                this.ln="last name is required";
            }else{
                this.ln="";
            }
            if(!this.company){
                this.com="company is required";
            }else{
                this.com="";
            }
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
            if(!this.rePass){
                this.rpass="re enter password is required";
            }else{
                this.rpass="";
            }

    if(!this.fn && !this.ln && !this.com && !this.ee && !this.pass && !this.rpass){
 const signupData={
                firstName:this.firstName ? this.firstName:"",
                lastName:this.lastName ? this.lastName:"",
                company:this.company ? this.company:"",
                email:this.email ? this.email : "",
                password:this.password ? this.password : ""
            }
            if(this.password == this.rePass){
            console.log(signupData);

            fetch("submit",{
        method:'POST',
         headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(signupData),
            })
            .then(res =>{
                console.log(res);
                 if(res.status == 200){
                    window.alert("Registered successfully");
                      this.$router.push('/');
                }else if(res.status == 400){
                        window.alert("Email id already exists");
                    }else{
                     window.alert("Register not successfull");
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }else{
            window.alert('mismatch password')
        }
        }
  }
  

    }
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
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>