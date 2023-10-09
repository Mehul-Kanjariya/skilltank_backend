const express = require("express");
const connection = require("./db");
const {userRouter} = require("./routes/user.routes")

const app = express();
app.use(express.json());
app.use("/users",userRouter);

app.listen(4500,async()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch(err){
        console.log(err);
    }
    console.log("Server is running at port 4500")
})