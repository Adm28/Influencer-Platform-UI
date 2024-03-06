"use client"
import { Inter } from "next/font/google";
import "../globals.css";
import { useEffect, uselayoutEffect, useState } from "react";
import { AuthProvider } from "@/app/context/authContext";
import { isLoggedIn, } from "@/app/lib/authUtilities";

const inter = Inter({ subsets: ["latin"] });


export default function ProtectedLayout({ children }) {
  
  const [loader, setLoader] = useState(true)
  const [authStatus, setAuthStatus]=useState(false)
  
  useEffect(()=>{
    console.log("Triggered useEffect")
    isLoggedIn().then((status)=>{
        console.log("setting auth status : ",status)
        setAuthStatus(true)
    }).finally(()=>{
        console.log("setting loading to false")
        setLoader(false)
    })    
  });

  return <AuthProvider value={{ authStatus, setAuthStatus}}> 
  
    { !loader && (
        <>
            <main className="px-2 py-4">{children}</main>
        </>)
    }
  </AuthProvider>
  
}
