<template>
    <div>
        <router-link to="/">Back</router-link>
        <form @submit="onSubmit">
            <div>
                <label for="firstname">First Name</label>
                <input v-model="firstName" class="form-control" id="firstname" type="text" placeholder="First name">
            </div>
             <div>
                <label for="lastname">Last Name</label>
                <input v-model="lastName" class="form-control" id="lastname" type="text" placeholder="lastname">
            </div>
            <div>
                <label for="company">Company</label>
                <input v-model="company" class="form-control" id="company" type="text" placeholder="company">
            </div>
            <div>
                <button class="btn" type="submit">SAVE</button>
                </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'Form',
    methods:{
        onSubmit(e){
            e.preventDefault();
            console.log("onSobmit");
             const formData={
                 
                firstName:this.firstName ? this.firstName:"",
                lastName:this.lastName ? this.lastName:"",
                company:this.company ? this.company:""
            
            }
            console.log(formData);
      fetch('api/submit', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => console.log(response))
      
        },
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
    background-color: #0d6efd;
    border-color: #0d6efd;
}
</style>
