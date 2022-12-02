<template>
  <div v-for="todo in todos" :key="todo.id">
   <TaskDetails
       :todo="todo"
       @delete-task="$emit('delete-task', todo.id)"
       @set-active="$emit('set-active', todo.id)"
   />
  </div>
</template>

<script>
import TaskDetails from "@/components/TaskDetails";
export default {
  name: 'TaskList',
  components: {
    TaskDetails
  },
  props:{
    todos: Array
  },
  emits:['delete-task', 'set-active'],
};
</script>

<style scoped>
div{
  margin-top: 30px;
}



</style>