import { connectDB } from "@/helper/db";
import { Users } from "@/models/users";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

connectDB();

export const POST = async (request) => {
    const userData = await request.json();

    try {
        const { password } = await Users.findOne({ email: userData?.email }).select("password");

        const result = bcrypt.compareSync(userData.password, password);
        if (result) {
            return NextResponse.json({ message: "Login successful!", status: true })
        }

        // return NextResponse.json({ message: "Unable to login!", status: false }, { status: 401 })
        return NextResponse.json({ message: "Wrong password!", status: false })
    }
    catch (error) {
        return NextResponse.json({ message: error.message, status: false });
    }

}