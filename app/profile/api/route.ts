import { headers,cookies } from "next/headers";
import { NextRequest } from "next/server";


// search functionality 
export async function GET(request:NextRequest) {
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    const theme = request.cookies.get("theme");
    console.log(theme);
    return new Response("profile api data", {
        headers: {
            "Content-type":"text/html",
            "set-Cookie":"theme-dark"
        }
    })
}