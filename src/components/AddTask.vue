<template>
    <div class="formdiv">
        <form @submit="onSubmit">
            <div>
                <label for="taskname">Task Name</label>
                <input v-model="text" class="form-control" id="taskname" type="text" placeholder="task name">
            </div>
             <div>
                <label for="day">Day</label>
                <input v-model="day" class="form-control" id="day" type="text" placeholder="day">
            </div>
            <div>
                <label for="reminder">Reminder</label>
                <input v-model="reminder" class="form-check-input" id="reminder" type="checkbox">
            </div>
            <div>
                <button class="btn" type="submit">SAVE</button>
                </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'AddTask',
    data(){
        return{
            text:'',
            day:'',
            reminder:false
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault();
        if(!this.text){
        alert("Please add task");
        return
            }
              const newTask={
                userId:localStorage.getItem('id'),  
                text:this.text,
                date:this.day,
                reminder:this.reminder
            }
            this.$emit("add-task",newTask);
            console.log(newTask);

            this.text='';
            this.day='';
            this.reminder=false;
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
.form-check-input {
    position: absolute;
    margin: .3rem;
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
.formdiv{
    border: 10px solid blueviolet;
}
form{
    margin: 10px;
}
</style>