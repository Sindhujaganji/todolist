<template>
  <div>
  <ul v-for="task in task" :key="task.id">
    <li> {{task.todo}} </li>
    <button class="ebtn"> Edit </button>
    <button class="dbtn"> Delete </button>
    <button class="cbtn"> Completed </button>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props:{
    task: Array
  },
};
</script>

<style scoped>
div{
  margin-top: 20px;
}
ul{
  display: flex;
  margin-left: 65px;
  margin-top: 10px;
}
li{
  color: black;
  list-style-type: none;
  border: solid 1px black;
  padding: 10px;
  width: 40rem;
}
.ebtn{
  background-color: #24A0ED;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.ebtn:hover{
  background-color: dodgerblue;
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
  background-color: white;
  color: green;
  padding: 10px 20px;
  margin-right: 62px;
  border: solid 2px green;
  cursor: pointer;
  border-left: none!important;
}
.cbtn:hover{
  background-color: green;
  color:white;
}

</style>