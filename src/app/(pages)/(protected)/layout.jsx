"use client"
import useAuth from "@/app/context/useAuth"
import { useRouter } from "next/navigation"

import React from "react"

const ProtectedLayout = ({children }) => {

    const router = useRouter();
    const { authStatus } = useAuth();

    if (!authStatus) {
        router.replace("/");
        return <></>;
    }
    return children

}

export default ProtectedLayout;