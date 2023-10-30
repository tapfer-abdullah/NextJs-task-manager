import { connectDB } from "@/helper/db";
import { Users } from "@/models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connectDB();

export const POST = async (request) => {
    const userData = await request.json();

    try {
        const user = await Users.findOne({ email: userData?.email }).select("password");

        if (!user) {
            return NextResponse.json({ message: "No user found!", status: false });
        }

        const result = bcrypt.compareSync(userData.password, user?.password);
        if (result) {

            const response = NextResponse.json({ message: "Login successful!", status: true });
            const token = jwt.sign({ email: userData.email }, process.env.JWT_KEY);

            response.cookies.set("authToken", token, { expiresIn: "1d", httpOnly: true });

            return response;
        }

        // return NextResponse.json({ message: "Unable to login!", status: false }, { status: 401 })
        return NextResponse.json({ message: "Wrong password!", status: false });
    }
    catch (error) {
        return NextResponse.json({ message: error.message, status: false });
    }

}