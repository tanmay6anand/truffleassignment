const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: false
    },
    hospital_name: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    bill_amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = Users = mongoose.model("Users", UserSchema);