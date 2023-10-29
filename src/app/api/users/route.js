import { connectDB } from "@/helper/db";
import { Users } from "@/models/users";
import { NextResponse } from "next/server";

connectDB();

export const GET = async (request) => {

    try {
        const allUsers = await Users.find().select("-password");
        return NextResponse.json(allUsers);
    }
    catch (error) {
        console.log(error);

        return NextResponse.json({ message: "Unable to get all users!", status: false });
    }
}

export const POST = async (request) => {
    const userData = await request.json();

    try {
        const newUser = new Users({ ...userData });
        const addedUser = await newUser.save();

        return NextResponse.json({ message: "User added to DB!", status: true });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Unable to get add new user users!", status: false });
    }

}