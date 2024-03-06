"use client";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheckCircle } from '@fortawesome/fontawesome-free-solid'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { loginUsingEmail, loginOAuthGithub, logout, isLoggedIn } from '@/app/lib/authUtilities';
import { useState, useLayoutEffect } from "react"
import { useRouter } from 'next/navigation';
import useAuth from '@/app/context/useAuth';
import Link from "next/link"

config.autoAddCss = false

const LoginForm = () => {

    const router = useRouter()
    const {authStatus, setAuthStatus} = useAuth()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useLayoutEffect (() => {
        console.log("uselayouteffect loginform");
        if(authStatus){
            router.replace("/dashboard");
        } 
    },[])
    
    const handleGithubSignIn = async () => {
        setLoading(true)
        setErrorMessage("")
        try {
            let signInStatus = loginOAuthGithub()
        } catch (ex) {
            console.log("Error occured during signup through github", ex)
            setErrorMessage(ex)
        } finally {
            setLoading(false)
        }
    }

    const handleLoginEmail = async (email, password) => {
        setErrorMessage("")
        setLoading(true)
        console.log("handling login user through email")
        console.log("email : ", email)
        console.log("password : ", password)
        try {
            await loginUsingEmail(email, password)
            const loginStatus = await isLoggedIn()
            console.log("loginstatus : ",loginStatus)
            if(loginStatus) {
                setAuthStatus(true)
                setEmail('')
                setPassword('')
            }
        
        } catch (ex) {
            console.log("handleLoginEmail error : ", ex)
            setErrorMessage(String(ex.message))
        } finally {
            setLoading(false)
        }
    }

    const handleSignOut = async () => {
        try {
            await logout()
        } catch (ex) {
            console.log("error during logout", ex)
        }
    }

    return (
        <div className="container h-full flex-col items-center justify-center md:grid lg:grid-cols-2 lg:px-0 ">
            <div className="relative h-full hidden flex-col bg-muted p-10  bg-zinc-900 text-white lg:flex dark:border-r">
                <div className="absolute inset-0  bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    WeConnect Inc
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;This platform has helped me to monetise my content and saved me countless
                            hours by connecting to most appropriate sponosors. I would &rdquo;
                        </p>
                        <footer className="text-sm">Sofia Davis</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login into your account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email to continue login with your account
                        </p>
                    </div>
                    <div>
                        <div className="grid gap-6 ">
                            <form>
                                <div className="grid gap-2">
                                    <div className="grid gap-1">
                                        <Label>
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            placeholder="name@example.com"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <Label>
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            placeholder="password"
                                            type="password"
                                            autoCapitalize="none"
                                            autoComplete="password"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <Button disabled={isLoading} onClick={() => handleLoginEmail(email, password)}>
                                        {isLoading && (
                                            <FontAwesomeIcon className="mr-5" icon={faSpinner} />
                                        )}
                                        Login
                                    </Button>
                                </div>
                            </form>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <Button type="button" onClick={() => handleGithubSignIn()} >
                                {isLoading ? (
                                    <FontAwesomeIcon className="mr-5" icon={faSpinner} spin size="2x" />
                                ) : (
                                    <FontAwesomeIcon className="mr-5" icon={faGithub} />
                                )}{" "}
                                GitHub
                            </Button>
                          
                            {
                                errorMessage != "" && (
                                    <p className="text-red-500">{errorMessage}</p>
                                )
                            }
                        </div>
                    </div>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LoginForm;