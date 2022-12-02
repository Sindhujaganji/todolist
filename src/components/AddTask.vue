<template>
  <form @submit="onSubmit">
    <div class="task">
      <label> Task: </label>
      <input type="text"  v-model="todo" placeholder="Enter the Task" name="todo"/>
    </div>
    <div class="desc">
      <label> Description: </label>
      <input type="text"  v-model="description" placeholder="Enter the Description" name="description"/>
    </div>
    <div class="addbtn">
      <button> Save Task </button>
    </div>
  </form>

</template>

<script>

export default {
  name: 'AddTask',
  data() {
    return {
      todo: '',
      description: '',
      active: false
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault()
      if(!this.todo){
        alert('Please add a task')
        return
      }
      const newTask = {
        // id: Math.floor(Math.random()*100000),
        todo: this.todo,
        description: this.description,
        active: this.active
      }
      this.$emit('add-task', newTask)

      this.todo = ''
      this.description = ''
    }
  }
}
</script>

<style scoped>
div{
  margin-top: 20px;
}
input{
  width: 41.5rem;
  padding: 8px;
}
.task{
  margin-top: 40px;
}
.task input{
  margin-left: 90px;
}
.desc input{
  margin-left: 35px;
}
label{
  margin-left: 14.5rem;
}

.addbtn{
  display: flex;
  justify-content: center;
}

button{
  background-color: black;
  color: white;
  padding: 0 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  height: 2rem;
  width: 7rem;
}

button:hover{
  background-color: gray;
}
</style>
