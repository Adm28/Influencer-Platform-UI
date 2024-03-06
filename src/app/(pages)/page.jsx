"use client";

import useAuth from "@/app/context/useAuth";
import React from "react";
import { useRouter } from "next/navigation";
import LandingPage from "@/app/components/LandingPage";

const Home = () => {

    const { authStatus } = useAuth();
    console.log("authstatus", authStatus)
    const router = useRouter();

    return (
        <div>
            {authStatus ? (
                <div>
                    {router.replace('/dashboard')}
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