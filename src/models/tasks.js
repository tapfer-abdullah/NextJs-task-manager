import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    userEmail: {
        type: String,
        required: [true, "User mail is required!"]
    },
    title: {
        type: String,
        required: [true, "Title is required!"]
    },
    description: {
        type: String,
        "default": "No description written yet!"
    },
    status: {
        type: String,
        enum: ["pending", "success", "processing"],
        default: "pending"
    },
    addedDate: {
        type: Date,
        default: Date.now()
    }
});

export const Tasks = mongoose.models.allTasks || mongoose.model("allTasks", taskSchema);