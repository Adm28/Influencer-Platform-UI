"use client"
import Link from "next/link"
import LoginForm from "@/app/components/LogInForm"
import useAuth from "@/app/context/useAuth"
import {useRouter} from "next/navigation"
import { useLayoutEffect } from "react"

export default function Login() {

  const{authStatus} = useAuth()
  const router = useRouter()

  // if(authStatus){
  //   router.replace("/")
  // }
  useLayoutEffect(() => {
    console.log("Login functionality authStatus : ",authStatus)
    if(authStatus) {
      console.log("AuthStatus value in Login is: ",authStatus)
      router.replace("/")
    }
  },[authStatus])

  return (
     <LoginForm /> 
  )
}