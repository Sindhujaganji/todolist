<template>
  <div @click="$emit('set-active', todo.id)"   class="task" :class="todo.active? 'green':'none'">
  <div class="details">
    <h3> {{todo.todo}}</h3>
    <p class="des">{{todo.description}}</p>
  </div>
    <div class="buttons">
        <button class="dbtn" @click="$emit('delete-task', todo.id)"> Delete</button>
        <button class="cbtn"> Completed</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskDetails',
  props:{
    todo: Object,
  },
}
</script>

<style scoped>
.task{
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  box-shadow: 0px 0px 10px 5px  rgba(100,100,100,0.1);
  background-color: white;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 80px;
}
.des{
  font-size: 15px;
}
.date{
  font-size: 12px;
}
.details{
  color: black;
}

.buttons{
  display: flex;
  margin-top: 5px;
  margin-right: 50px;
}

button{
  height: 2.2rem;
  width: 6rem;
}
.dbtn{
  background-color: #FF0000;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

}
.dbtn:hover{
  background-color: darkred;
}
.cbtn{
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-align: center;
}
.cbtn:hover{
  background-color: darkgreen;
  color:white;
}
.green{
  border-left: 3px solid green;
  border-right: 3px solid green;
}
.none{
  border: none;
}
</style>