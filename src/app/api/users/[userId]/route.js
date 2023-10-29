import { Users } from "@/models/users";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { userId } = params;

    try {
        const user = await Users.findById(userId).select("-password");
        return NextResponse.json(user);
    }
    catch (error) {
        return NextResponse.json({ message: "Failed to find user!", status: false });
    }
}

export async function DELETE(request, { params }) {

    const { userId } = params;
    try {
        //use can use any one of the 2 following methods
        // const result = await Users.deleteOne({ _id: new Object(userId) })
        const result = await Users.deleteOne({ _id: userId })
        return NextResponse.json({ message: "Deleted successfully!", status: true });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to delete!", status: false });
    }
}


export const PUT = async (request, { params }) => {
    const { userId } = params;
    const newData = await request.json();
    console.log(newData);

    try {
        // const result = await Users.findByIdAndUpdate(userId, { ...newData }, { new: true });
        const result = await Users.findByIdAndUpdate({ _id: userId }, { ...newData }, { new: true });
        return NextResponse.json({ message: "User info updated successfully!", status: true });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to update data!", status: false });
    }
}
