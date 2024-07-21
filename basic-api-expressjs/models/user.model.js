const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter user name"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"] 
    },
    role: {
        type: String,
        required: [true, "Please enter a role"]
    }
}, 
{
    timestamps: true,
});

const User = mongoose.model("users", UserSchema);  //Specify the name of the collection that UserSchema belongs

module.exports = User;