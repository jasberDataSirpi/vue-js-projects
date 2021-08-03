<template>
        <h1>CHANGE PASSWORD</h1>

    <div class="formdiv">
        <form @submit="onChange">
            <div class="input-div">
                <label>Old Password:</label>
                <input class="form-control" v-model="oPassword" type="password" placeholder="old password">
            </div>
             <div class="input-div">
                <label>New Password:</label>
                <input class="form-control" v-model="nPassword" type="password" placeholder="new password">
            </div>
             <div class="input-div">
                <label>Confirm Password:</label>
                <input class="form-control" v-model="cPassword" type="password" placeholder="re enter password">
            </div>
            <div class="input-div">
                <button class="btn" type="submit">CHANGE</button>
                <span>OR <router-link to="/home">Home</router-link></span>
            </div>
        </form>
        
        
    </div>
</template>

<script>
export default {
    name:'Changepass',
    methods:{
       onChange(e){
  e.preventDefault(); 
  this.email=localStorage.getItem('mail');     
   const loginData={
                email:this.email ? this.email : "",
                oldPassword:this.oPassword ? this.oPassword : "",
                newPassword:this.nPassword ? this.nPassword : ""
            }
            console.log(loginData);

            if(this.nPassword==this.cPassword){
                  fetch("changepassword",{
        method:'POST',
         headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(loginData),
            })
            .then(res =>{
                console.log(res);
                if(res.status==200){
                    // window.alert("logged in successfully");
                    localStorage.clear();
                      this.$router.push('/');
                }
                else{
                     window.alert("not changed successfully");
                }
            })
            .catch(err=>{
                console.log(err);
            })
        
            }else{
                window.alert('Password mismatches')
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