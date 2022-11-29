const http = require("http");
const path = require("path");
const fs = require("fs");
const cors=require("cors");
const Todo = require("./Controller");
const { getReqData } = require("./Utils");

const server = http.createServer(async(req, res) => {

    /*
    we can Navigate to different pages via different requests.
    if / then goto index.html
    if /about about then goto about.html
    if /api then laod the JSON file  /  ;) this might be something you need for your exam.
    */

    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, DELETE, UPDATE",
        "Access-Control-Max-Age": 2592000,
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Allow-Headers": "Content-Type"
        /** add other headers as per requirement */
    };

    if (req.url === '/') {
        // read public.html file from public folder
        fs.readFile(path.join(__dirname, 'Portfolio', 'index.html'),
            (err, content) => {

                if (err) throw err;
                res.writeHead(200, headers);
                res.end(content);
            }
        );
    }

    else if (req.url === '/about') {
        // read the about.html file public folder
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'),
            (err, content) => {

                if (err) throw err;
              //  res.writeHead(200, { 'Content-Type': 'text/html' });
                res.writeHead(200, headers);
                res.end(content);
            }
        );
    }

    else if (req.url==='/api/todos' && req.method === "GET") {
      const todos = await new Todo().getTasks();
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify(todos));
    }

    else if(req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "GET"){
        try {
            const id = req.url.split("/")[3];
           const  todo = await new Todo().getTask(id);
          //  res.writeHead(200, {"Content-Type": "application/json"});
            res.writeHead(200, headers);
            res.end(JSON.stringify(todo));
        } catch (error){
          //  res.writeHead(404, {"Content-Type": "application/json"});
            res.writeHead(404, headers);
            res.end(JSON.stringify({message: error}));
        }
    }

    else if(req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "DELETE"){
        try {
            const id = req.url.split("/")[3];
            let message = await new Todo().deleteTask(id);
           // res.writeHead(200, { "Content-Type": "application/json" });
            res.writeHead(200, headers);
            // send the message
            res.end(JSON.stringify({ message }));
        }
        catch (error) {
            // set the status code and content-type
         //   res.writeHead(404, { "Content-Type": "application/json" });
            res.writeHead(200, headers);
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }

    else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "PATCH") {
        try {
            // get the id from the url
            const id = req.url.split("/")[3];
            // update todo
            let updated_todo = await new Todo().updateTask(id);
            // set the status code and content-type
           // res.writeHead(200, { "Content-Type": "application/json" });
            res.writeHead(200, headers);
            // send the message
            res.end(JSON.stringify(updated_todo));
        } catch (error) {
            // set the status code and content type
           // res.writeHead(404, { "Content-Type": "application/json" });
            res.writeHead(200, headers);
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }
    else if (req.url === "/api/todos" && req.method === "POST") {
        // get the data sent along
        let todo_data = await getReqData(req);
        // create the todo
        let todo = await new Todo().createTask(JSON.parse(todo_data));
        // set the status code and content-type
      //  res.writeHead(200, { "Content-Type": "application/json" });
        res.writeHead(200, headers);
        //send the todo
        res.end(JSON.stringify(todo));
    }

    else{
        res.end("<h1> 404 nothing is here</h1>");
    }

    /*

        But what if we have  1000 pages/urls ? do we need to write 1000 if-else statements?

    /*/
});

const PORT= process.env.PORT || 5959;

server.listen(PORT,()=> console.log(`Great our server is running on port ${PORT} `));