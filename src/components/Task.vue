<template>
<div 
@click="$emit('toggle-reminder',task._id)" 
:class="[task.reminder ? 'reminder':'','task']">
<h3>{{task.text}}
  <span @click="$emit('delete-task',task._id)" class="fas">X</span>
</h3>
    <p>{{task.date}}</p>
</div>  
</template>


<script>
export default {
    name:'Task',
    props:{
        task:Object,
    },
}
</script>

<style scoped>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}  
.fas{
  color: red;
}

</style>