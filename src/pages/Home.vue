<template>
<div v-show="showTaskForm">
    <AddTask @add-task="addTask" />
</div>
<Tasks 
@delete-task="deleteTask" 
@toggle-reminder="toggleReminder"
@add-task="addTask"
:tasks="tasks" />
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
import axios from 'axios';

export default {
    name:'Home',
    props:{showTaskForm:{
        type:Boolean,
        default:false
    }},
    components:{
    Tasks,
    AddTask,
    },
      data(){
        return {
            tasks:[],
        }
      },
      methods:{
 async addTask(task) {

      axios.post('addtask',task)
  .then((response) => {
    console.log(response);
    console.log(response.status);
                 if(response.status==200){
                      this.tasks = [...this.tasks, response.data]
                }
                else{
                     window.alert("Task stored not successfull");
                }
  })
  .catch((error) => {
    console.log(error);
  });
                  
        // this.tasks = [...this.tasks, task]
  
    },

async deleteTask(id) {
      if (confirm('Are you sure?')) {    

axios.delete(`deletetask/${id}`)
  .then((response) => {
    console.log(response);
     if(response.status==200){
    this.tasks = this.tasks.filter((task) => {
    return task._id !== id
    })
     }else{
       window.alert("delete not success");
     }
  })
  

      }
    },
 async toggleReminder(id) {
      // const taskToToggle = await this.fetchTask(id)
      // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
      // const res = await fetch(`api/tasks/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify(updTask),
      // })
      // const data = await res.json()
      // this.tasks = this.tasks.map((task) =>
      //   task._id === id ? { ...task, reminder: !task.reminder } : task
      // )
 const taskToToggle =  this.tasks.filter((task) => {
    return task._id == id
    })
      const updTask = { ...taskToToggle[0], reminder: !taskToToggle[0].reminder }

      axios.put(`changetask/${id}`,updTask)
      .then(response=>{
        if(response.status==200){
          this.tasks = this.tasks.map((task) =>
        task._id === id ? { ...task, reminder: !task.reminder } : task
      )
        }
      })

    },
  fetchTasks() {
    let userId = localStorage.getItem('id');
     axios.get(`tasks/${userId}`).then(res=>{
       console.log(res);
       this.tasks=res.data  //get all tasks from backend
     }).catch(err=>{
       console.log(err);
       window.alert("No Tasks");
     })
    },
   
  },
     async created(){
        this.fetchTasks();
      },

}
</script>

<style scoped>

</style>