const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const userRoute = require('./routes/user.route.js');
const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/users", userRoute);

port = 3000


app.get('/', (req, res) => {
    res.send('User nodejs API')
});

//
mongoose.connect("mongodb://127.0.0.1:27017/BackendDB") //Connection String
.then(() => {
    console.log("Connection to database succesful!!");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    });
})
.catch(() => {
    console.log("Connection failed :(");
})

