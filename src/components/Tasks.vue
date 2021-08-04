<template>
<div v-if="tasks.length">
 <div :key="task.id" v-for="task in tasks">
        <Task 
        @delete-task="$emit('delete-task',task.id)"
        @toggle-reminder="$emit('toggle-reminder',task.id)"
         :task="task" />
    </div>
</div>
<div v-else>
<h2 style="color:red;text-align:center">NO TASKS AVAILABLE</h2>
</div>
   
</template>

<script>
import Task from "./Task.vue";

export default {
    name:'Tasks',
    components:{
        Task,
    },
    props:{
        tasks:Array,
    },
    emits:['delete-task','toggle-reminder'],
}
</script>