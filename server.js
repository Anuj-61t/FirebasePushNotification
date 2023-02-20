const express = require("express");
const sequelize = require("sequelize")
const dotenv = require("dotenv").config()


const PORT  = process.env.PORT|| 3000 


const app = express()

app.use(express.json);
app.use(express.urlencoded({extended: true}))


app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`)
});

// notifications