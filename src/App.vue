<template>
  <h1> To-Do-List </h1>
  <task-container :todos="todos"> </task-container>
</template>
<script>

import TaskContainer from "@/components/TaskContainer";

export default {
  name: 'App',
  components: {
    TaskContainer
  },
  data(){
    return{
      todos: []
    }
  },
  async created(){
    this.todos = await this.fetchTasks();
  },
  methods:{
    async fetchTasks(){
      const res = await fetch("http://localhost:5959/api/todos")
      const data = await res.json()
      console.log(data)
      return data
    },
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  background-color: #85BEAF;
  color: white;
  font-family: 'Poppins', sans-serif;
}

h1{
  text-align: center;
  margin-top: 15px;
}
</style>
