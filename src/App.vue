<template>
  <h1> To-Do-List </h1>
  <task-container :tasks="tasks"> </task-container>
</template>
<script>

import TaskContainer from "@/components/TaskContainer";
import {fetchTasks} from "@/service/TaskService";

export default {
  name: 'App',
  components: {
    TaskContainer
  },
  data(){
    return{
      tasks: []
    }
  },
  async created(){
    this.tasks = await this.fetchTasks();
   // console.log('')
  },
  methods:{
    fetchTasks
  },
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
