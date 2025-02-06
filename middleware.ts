import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import { publicRoutes, authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT } from "@/routes" 

const { auth } = NextAuth(authConfig)

export default auth((req: Request & {auth?: any, nextUrl: URL }): Response | void => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)


  if (isApiAuthRoute){
    console.log("api code reache here")
    return;
  }

  if(isAuthRoute){
    if (isLoggedIn == true){
      console.log("here code is not reaching actually")
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    console.log("code reaches during auth routes")
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    console.log("auth code reaches here")
    return Response.redirect(new URL(authRoutes[0], nextUrl));
  }

  return;
})
 

 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
} 
