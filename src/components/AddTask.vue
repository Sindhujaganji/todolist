<template>
  <div>
  <input type="text" placeholder="Enter the Task" v-model="enteredTask"/>
  <button @click="addTask"> Add Task </button>
  </div>
</template>

<script>
import {fetchTasks} from "@/service/TaskService";

export default {
  name: 'AddTask',
  data(){
    return{
      enteredTask : ""
    }
  },
  methods:{
    addTask(){
      fetch('http://localhost:5959/api/todos', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({todo: this.enteredTask, completed: false}),
      }).then(fetchTasks);
    }
  },
};
</script>

<style scoped>
div{
  display: flex;
}
input{
  margin-top: 30px;
  padding: 9px;
  margin-left: 65px;
  width: 48rem;
}
button{
  background-color: #24A0ED;
  color: white;
  padding: 0 20px;
  border: none;
  border-radius: 3px;
  margin-top: 25px;
  cursor: pointer;
}

button:hover{
  background-color: dodgerblue;
}
</style>
