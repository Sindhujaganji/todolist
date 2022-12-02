<template>
  <div class="lists">
    <div>
      <button class="tbtn"> Tasks </button>
      <router-link :to="{ name: 'CompletedTasks' }"> Completed </router-link>
    </div>
    <div>
      <button
          @click="$emit('toggle-add-task')"
          :class="this.showAddTask? 'close': 'abtn'"
      >
        {{this.showAddTask ? 'Close' : 'Add Task'}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskContainer',
  components: {
  },
  props:{
    showAddTask: Boolean
  }
}
</script>

<style scoped>
button{
  padding: 10px 15px;
  border: none;
  margin-top: 20px;
  height: 2rem;
  width: 7rem;
  font-weight: bold;
  cursor: pointer;
}
.lists{
  display: flex;
  justify-content: space-around;
}
.tbtn{
  background-color: #FCD12A;
  color: white;
}
.tbtn:hover{
  background-color: darkorange;
}
.cbtn{
  background-color: green;
  color: white;
}
.cbtn:hover{
  background-color: darkgreen;
}
.abtn{
  background-color: #24A0ED;
  color: white;
}

.abtn:hover{
  background-color: dodgerblue;
}
.close{
  background-color: red;
}
.close:hover{
  background-color: darkred;
  color: white;
}
</style>