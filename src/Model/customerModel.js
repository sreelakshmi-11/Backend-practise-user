import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
})

const Customer = mongoose.model('Customer', customerSchema);

export default Customer
