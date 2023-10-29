import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    },
    about: String,
    imgURL: String,
    address: {
        street: String,
        city: String,
        country: String,
        postalCode: Number
    }

})

export const Users = mongoose.models.users || mongoose.model("users", userSchema);