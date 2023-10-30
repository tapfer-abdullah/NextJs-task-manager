import { NextResponse } from "next/server";

export const GET = (request) => {
    const response = NextResponse.json({
        message: "Logout successful!",
        status: true
    })

    response.cookies.set("authToken", "", {
        expires: new Date(0)
    })

    return response;
}