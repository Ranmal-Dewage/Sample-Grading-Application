const express = require("express")
const mongoose = require("mongoose")
const studentRoutes = require("./routes/students");
const teacherRoutes = require("./routes/teachers");
const assignmentsRoutes = require("./routes/assignments");
const modelInit = require("./initialize_db")


// DB Connection
mongoose.connect("mongodb://localhost:27017/GradingApp",
    { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("open", () => {
    console.log("Connected to MongoDB");

    // comment below line after initial run
    // db initialization codes

    // modelInit.initiAssignment();
    // modelInit.initiStudents();
    // modelInit.initiTeachers();
    
});


//get Express functionalities to app
const app = express();


//***** Middleware Operations *****

app.use(express.json());

//enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Navigate to mentioned route
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/assignments", assignmentsRoutes);



//base url
app.get('/', (req, res) => {
    res.status(200).json({ status: true })
})

//port server listens
app.listen(3000, () => { console.log("Server Satrted at 'http://localhost:3000'") })