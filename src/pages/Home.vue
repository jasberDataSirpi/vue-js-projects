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
        // const res = await fetch(`deletetask/${id}`, {
        //   method: 'DELETE',
        // })
        // res.status === 200
        //   ? (this.tasks = this.tasks.filter((task) => task._id !== id))
        //   : alert('Error deleting task')

axios.delete(`deletetask/${id}`)
  .then(function (response) {
    console.log(response);
    (this.tasks = this.tasks.filter((task) => task._id !== id))
  })
  .catch(function (error) {
    console.log(error);
    window.alert('Error deleting task')
  });

      }
      // this.tasks = this.tasks.filter((task) => task.id !== id)
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
      this.tasks = this.tasks.map((task) =>
        task._id === id ? { ...task, reminder: !task.reminder } : task
      )
    },
  fetchTasks() {
     axios.get('tasks').then(res=>{
       console.log(res);
       this.tasks=res.data  //get all tasks from backend
     }).catch(err=>{
       console.log(err);
       window.alert("No Tasks");
     })

      // const res = await fetch('tasks')
      // const data = await res.json()
      // return data
    },
    // async fetchTask(id) {
    //   const res = await fetch(`api/tasks/${id}`)
    //   const data = await res.json()
    //   return data
    // },
  },
     async created(){
        this.fetchTasks();
      },

}
</script>

<style scoped>

</style>