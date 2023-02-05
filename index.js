//  Api project using Express js
import express from "express"; //  require express
import bodyParser from "body-parser";
//  import users  routes 
import usersRoutes from "./routes/users.js";
//  express module function
const app = express();
//  port
const PORT = 5000;
//  app use
app.use(bodyParser.json()); // json data
//  app use users 
app.use("/users", usersRoutes);


//  app routung
app.get("/", function (req, res) {
    
    res.send('Hello from Home page !')
})

//  app  listen port
app.listen(PORT, (req, res) =>
  console.log(`Listening server at http://localhost:${PORT}`)
);
