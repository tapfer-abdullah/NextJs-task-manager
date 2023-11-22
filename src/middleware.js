
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    // if(request.nextUrl.pathname === "/login")

    const authToken = request.cookies.get("authToken")?.value;
    const loggedInUserNotAccessiblePath = request.nextUrl.pathname === "/auth/login" || request.nextUrl.pathname === "/auth/register";
    // console.log(request.nextUrl.pathname)

    if (request.nextUrl.pathname === "/api/auth" || request.nextUrl.pathname === "/api/users") {
        return
    }

    if (request.nextUrl.pathname.startsWith("/api") && !authToken) {
        return NextResponse.json({ message: "Access denied!", status: false }, { status: 401 });
    }

    if (loggedInUserNotAccessiblePath) {
        if (authToken) {
            return NextResponse.redirect(new URL("/profile", request.url));
        }
    }
    else {
        if (!authToken) {
            // return NextResponse.redirect(new URL("/", request.url));
            return NextResponse.redirect(new URL("/auth/login", request.url));
        }
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/api/:path*', "/tasks", "/add-task", "/profile/:path*", "/auth/login", "/auth/register"],
}