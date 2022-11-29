const data = require("../API/db.json");
const {resolve} = require("@babel/core/lib/vendor/import-meta-resolve");

class Controller {
    //getting all tasks
    async getTasks(){
        return new Promise((resolve, _)=>resolve(data));
    }

    async getTask(id){
        return new Promise((resolve, reject)=>{
            let todo = data.find((todo)=>todo.id === parseInt(id));
            if(todo){
                resolve(todo);
            }
            else{
                reject(`Todo with id ${id} not found`);
            }
        });
    }

    async createTask(todo){
        return new Promise((resolve, _)=>{
            let newTodo = {
                id: Math.floor(4+Math.random()*10),
                ...todo,
            };
            resolve(newTodo);
        });
    }

    async updateTask(id){
        return new Promise((resolve, reject)=>{
            let todo = data.find((todo)=>todo.id === parseInt(id));
            if(!todo){
                reject(`No todo with id ${id} found`);
            }
            todo["completed"] = true;
            resolve(todo);
        });
    }

    async deleteTask(id){
        return new Promise((resolve, reject)=>{
            let todo = data.find((todo)=>todo.id === parseInt(id));
            if(!todo){
                reject(`No todo with id ${id} not found`);
            }
            resolve(`Todo delete succesfully`);
        });
    }
}

module.exports = Controller;