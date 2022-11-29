<template>
  <div class="container">
    <div class="lists">
      <button class="tbtn"> Tasks </button>
      <button class="cbtn"> Completed </button>
    </div>
  <AddTask/>
  <TaskList :todo="todos"/>
  </div>
</template>

<script>
import AddTask from "./AddTask.vue";
import TaskList from "./TaskList.vue";

export default {
  name: 'TaskContainer',
  components: {
    AddTask,
    TaskList
  },
  props:{
    todos: Array
  }
}
</script>

<style scoped>
.container{
  box-sizing: border-box;
  background-color: white;
  width: 62rem;
  height: 400px;
  margin-left: 8.2rem;
  margin-top: 4rem;
}
button{
  padding: 10px 15px;
  border: none;
  margin-top: 20px;
}
.lists{
  margin-left: 68px;
  margin-right: 64px;
}
.tbtn{
  background-color: #FCD12A;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.tbtn:hover{
  background-color: darkorange;
}
.cbtn{
  background-color: green;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.cbtn:hover{
  background-color: darkgreen;
}
</style>