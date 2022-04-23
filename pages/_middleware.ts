import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: any) => {
   const token = await getToken({req,secret: process.env.JWT_SECRET});

   const {pathname} = req.nextUrl

   if(pathname.includes('/api/auth') || token) {
       return NextResponse.next();
   }

   if(!token && pathname !== '/login') {
       return NextResponse.redirect(`http://${process.env.DOMAIN_URL}/login`)
   }
}