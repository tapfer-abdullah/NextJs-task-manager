import { Users } from "@/models/users";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const authToken = request.cookies.get("authToken")?.value;

    if (!authToken) {
        return NextResponse.json({ email: null });
    }

    try {
        const payload = jwt.verify(authToken, process.env.JWT_KEY);

        if (payload) {
            const userData = await Users.findOne({ email: payload.email }).select("-password");
            // console.log(userData)
            return NextResponse.json({ userData, status: true });
        }


    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to get user!" })
    }


}