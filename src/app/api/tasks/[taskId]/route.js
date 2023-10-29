
import { connectDB } from "@/helper/db";
import { Tasks } from "@/models/tasks";
import { NextResponse } from "next/server";

connectDB();

export const GET = async (request, { params }) => {
    const { taskId } = params;

    try {
        const task = await Tasks.findById(taskId);
        return NextResponse.json(task);
    }
    catch (error) {
        return NextResponse.json({ message: "Failed to find task!", status: false });
    }
}

export async function DELETE(request, { params }) {

    const { taskId } = params;
    try {
        //use can use any one of the 2 following methods
        // const result = await Tasks.deleteOne({ _id: new Object(taskId) })
        const result = await Tasks.deleteOne({ _id: taskId })
        return NextResponse.json({ message: "Deleted successfully!", status: true });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to delete!", status: false });
    }
}


export const PUT = async (request, { params }) => {
    const { taskId } = params;
    const newData = await request.json();

    try {
        // const result = await Tasks.findByIdAndUpdate(taskId, { ...newData }, { new: true });
        const result = await Tasks.findByIdAndUpdate({ _id: taskId }, { ...newData }, { new: true });
        return NextResponse.json({ message: "Task info updated successfully!", status: true });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to update data!", status: false });
    }
}
