"use client"
import Link from "next/link"
import LoginForm from "@/app/components/LogInForm"
import useAuth from "@/app/context/useAuth"
import {useRouter} from "next/navigation"

export default function Login() {

  const{authStatus} = useAuth()
  const router = useRouter()

  if(authStatus){
    router.replace("/")
  }

  return (
     <LoginForm /> 
  )
}