
import { NextResponse } from "next/server";
const protectedInfRoutes = ["/inf","/inf/discover"]
const protectedSpRoutes = ["/sp","/sp/discover"]

let library;
let getCurrentUser;

if (typeof window !== undefined) {
  console.log("process" , process)
  // This will only be true on the client side
  console.log("window is not undefined , true fro clieent side")
  // const module = require('@/app/lib/appwriteUtilities');
  console.log("module is ", module)
  getCurrentUser = module.getCurrentUser;
}

export default function middleware(request) {
  if (typeof window !== undefined) {
    console.log("middleware from client side");
    console.log("Middleware triggered")
    console.log("library : ",library)
    console.log("GetCurrentUser")
    if(getCurrentUser) {
      getCurrentUser().then((response) => {
        console.log("getcurrentUser in middleware response, ", response)
        return NextResponse.redirect(new URL('/sp/discover', request.url))
      })
    }
  }

  // TODO Protect routes based on roles
  // userInfo = getUser()
  // if(protectedInfRoutes.includes(req.nextUrl.pathname)) {
  //   if(!userInfo || !userInfo.labels || !userInfo.labels.contain('influencer')) {
  //     console.log("middleware User info : ",userInfo)
  //     const absoluteURL = new URL("/", req.nextUrl.origin);
  //     return NextResponse.redirect(absoluteURL.toString()); 
  //   }
  // }
  // if(protectedSpRoutes.includes(req.nextUrl.pathname)) {
  //   if(!userInfo || !userInfo.labels || !userInfo.labels.contain('sponsor')) {
  //     console.log("middleware User info : ",userInfo)
  //     const absoluteURL = new URL("/", req.nextUrl.origin);
  //     return NextResponse.redirect(absoluteURL.toString());
  //   } 
  // }
}
export const config = {
  matcher: ['/inf/:path*']
}