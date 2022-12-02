<template>
  <header>
  <h2> To-Do-List </h2>
  </header>
  <div class="container">
    <TaskContainer
        :todos="todos"
        @toggle-add-task="toggleAddTask"
        :showAddTask="showAddTask"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    <router-view></router-view>
    <div class="tasklist">
    <TaskList
        :todos="todos"
        @delete-task="deleteTask"
        @set-active="setActive"
    />
    </div>
  </div>
  <footer>
    <p> Contact information </p>
  </footer>
</template>
<script>

import TaskContainer from "@/components/TaskContainer";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";

export default {
  name: 'App',
  components: {
    TaskContainer,
    TaskList,
    AddTask
  },
  data(){
    return{
      todos: [],
      showAddTask: false
    }
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    async addTask(todo){
      const res = await fetch('http://localhost:3000/todos',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
      const  data = await res.json()
      this.todos = [...this.todos, data]
    },
    async deleteTask(id){
      if(confirm('Are you sure?')) {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
          method: 'DELETE',
        })
        res.status === 200 ? ( this.todos = this.todos.filter(
            (todo) => todo.id !== id)) :alert('Error deleting task')
      }
    },
    async setActive(id){
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, active: !taskToToggle.active}

      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PUT',
        headers:{
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask)
      })
      const data = await res.json()
      this.todos = this.todos.map((todo)=>todo.id===id
          ? {...todo, active: data.active}: todo)
    },
    async fetchTasks(){
      const res = await fetch('http://localhost:3000/todos')
      const data = await res.json()
      return data
    },
    async fetchTask(id){
      const res = await fetch(`http://localhost:3000/todos/${id}`)
      const data = await res.json()
      return data
    },
  },
  async created(){
    this.todos =  await this.fetchTasks()
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
  font-family: 'Poppins', sans-serif;
}

header{
  background-color: darkcyan;
  color: white;
  padding: 20px;
  text-align: center;
}
.tasklist{
  margin-top: 50px;
  margin-left: 10px;
}

footer {
  margin-top: 60px;
  background-color: darkcyan;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
