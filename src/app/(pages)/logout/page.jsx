"use client"
import React, { useEffect,useState } from 'react';
import { logout } from '@/app/lib/appwriteUtilities';
import useAuth from '@/app/context/useAuth';
import { useRouter } from 'next/navigation';

export default function SignOut() {

    const { authStatus, setAuthStatus } = useAuth();
    const [loader,setLoader] = useState(true)
    const router = useRouter();
    logout().then(
        (response) => {
            console.log("logout status", logout)
            if (response) {
                console.log("setting the authStatus as false")
                setAuthStatus(false)
            }
        }
    ).catch((ex) => {
        console.log("Error occured during loggingout", ex)

    }).finally(() => {
        console.log("Logging out finished");
        setLoader(false)
        router.replace("/");
    });
  
    
}