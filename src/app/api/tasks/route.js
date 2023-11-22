import { connectDB } from "@/helper/db";
import { Tasks } from "@/models/tasks";
import { NextResponse } from "next/server";
import { parse } from 'url';


connectDB();

export const GET = async (request, { params }) => {
    const url = request.url;

    const { query } = parse(url, true);

    // Accessing the 'name' parameter value
    const searchParams = new URLSearchParams(query);
    const emailValue = searchParams.get('email');
    // console.log(searchParams, " ", emailValue)

    if (emailValue) {
        try {
            const allTasks = await Tasks.find({ userEmail: emailValue });
            return NextResponse.json(allTasks);
        }
        catch (error) {
            console.log(error);
            return NextResponse.json({ message: "Failed to fetch data!", status: false });
        }
    }
    else {
        try {
            const allTasks = await Tasks.find();
            return NextResponse.json(allTasks);
        }
        catch (error) {
            console.log(error);
            return NextResponse.json({ message: "Failed to fetch data!", status: false });
        }
    }


}

export const POST = async (request) => {
    const taskData = await request.json();
    // console.log(taskData)
    try {
        const newTask = new Tasks({
            ...taskData
        });
        const result = await newTask.save();
        return NextResponse.json({ message: "Task added to DB.", status: true, data: result });

    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to add task!", status: false });
    }
}

