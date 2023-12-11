const express = require('express');
const mongoose = require('mongoose');

let app = express();

//connect server to mongo ==> local db

mongoose.connect("mongodb://0.0.0.0:27017/Courses",)
.then(()=>console.log('DB now is connected'))
.catch((err)=>{console.error(err);});

//schema
const userschema = new mongoose.Schema({
name : String,
age : Number, 
Gmail : String,
phone : String, 
});

//convert schema to model (class)
let usermodel = new mongoose.model("users" , userschema);

//schema
const coursesschema = new mongoose.Schema({
    name : String,
    duration : String,
    });

    //convert schema to model (class)
let coursesmodel = new mongoose.model("course" , coursesschema);

let newuser = new usermodel({
    name : "john",
    age : "25",
    Gmail : "john12@gmail.com",
    phone : "01534786539"
}).save();

let newuser2 = new usermodel({
    name : "hamdy",
    age : "22",
    Gmail : "hamdy@gmail.com",
    phone : "01296786539"
}).save();


let newuser3 = new usermodel({
    name : "sam",
    age : "20",
    Gmail : "sam2@gmail.com",
    phone : "01134786539"
}).save();

let newcourse = new coursesmodel({
    name : "cybersecurity",
    duration : "3 months"
}).save();

let newcourse2 = new coursesmodel({
    name : "JavaScript",
    duration : "2 months"
}).save();

let newcourse3 = new coursesmodel({
    name : "HTML",
    duration : "45 days"
}).save();

//endpoint fetch all users from database

//localhost:3000/users
app.get('/users', async (req,res)=>{
    let allUsers = await usermodel.find();
    res.status(200);
    console.log(allUsers.length)
    res.json(allUsers)

app.get('/' ,(req, res)=>{
    res.send("Welcomeeeeeeeee")
})

})

//endpoint fetch all courses from database

//localhost:3000/courses
app.get('/courses', async (req,res)=>{
    let allCourses = await coursesmodel.find();
    res.status(200);
    console.log(allCourses.length)
    res.json(allCourses)
})

//verb post
//localhost:3000/users
app.post('/users' , async(req , res)=>{
    let newUser = await usermodel({
        name : "salah",
        age : 28
    }).save();

    res.status(201);
    res.json("user has created")
})


//verb post
//localhost:3000/courses
app.post('/courses' , async(req , res)=>{
    let newCourses = await coursesmodel({
        name : "Css",
        duration : "1 month"
    }).save();

    res.status(201);
    res.json("course has created")
})

app.listen(3000 , function(){
    console.log('server now is opened')
})