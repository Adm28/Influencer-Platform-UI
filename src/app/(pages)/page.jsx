"use client";

import useAuth from "@/app/context/useAuth";
import React,{useState,useEffect} from "react";
import { useRouter } from "next/navigation";
import LandingPage from "@/app/components/LandingPage";
import { getCurrentUser } from "@/app/lib/appwriteUtilities";
import Spinner from "@/components/spinner"

const Home = () => {

    const { authStatus } = useAuth();
    console.log("authstatus", authStatus)
    const router = useRouter();
    const [userInfo, setUserInfo] = useState('')

    console.log("AuthStatus : ", authStatus)

    useEffect(() => {
        if (authStatus) {
            getCurrentUser().then((response) => {
                console.log("Get Current User in iseEffect in Page page: ",response)
                // setUserInfo(response)
                router.push('/register')
                // if (response.labels.includes('influencer')) {
                //     router.push('/inf/discover');
                // } else if (response.labels.includes('sponsor')) {
                //     router.push('/sp/discover');
                // } 
                // else {
                //     console.log("enter registration page")
                //     router.push('/register');
                // }
            }).catch((ex)=>{
                console.log("exception while loading pages : ",ex)
            })
        }
    }, [authStatus]);

    
    return (
        <div>
            {authStatus  ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <div>
                    <LandingPage />
                </div>
            )}
        </div>

    );
}
export default Home;