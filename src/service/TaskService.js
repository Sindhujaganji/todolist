export   const  fetchTasks = async () =>  {
    const res =  await fetch("http://localhost:3000/tasks");
    const data = await res.json()
    console.log(data)
   return data
}