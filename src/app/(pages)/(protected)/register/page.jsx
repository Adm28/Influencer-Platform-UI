'use client'
import { useState,useEffect,useLayoutEffect } from "react"
import { getCurrentUser } from "@/app/lib/appwriteUtilities"
import Spinner from '@/components/spinner'
import RegisterRole from "@/app/components/RegisterRole"
import RegisterInfluencer from "@/app/components/RegisterInfluencer"
import RegisterSponsor from "@/app/components/RegisterSponsor"
import { useRouter } from "next/navigation"


export default function Home() {

    const [userAuthInfo, setUserAuthInfo] = useState('')
    const [loading, setLoading] = useState(true)
    // const [isRegisterRole, setRegisterRole] = useState(false)
    const [isRegisterUser, setRegisterUser] = useState(false)
    const [userType , setUserType] = useState('')

    const router = useRouter();
    
    useLayoutEffect(() => {
        console.log("uselayouteffect register main page");
        setUserInfo().then(() => {
            console.log("userInfo is set ");
        }).catch((ex) => {
            console.log("exception occured while handling setuserinfo exception : ",ex)
        }).finally(
        );
    })

    async function setUserInfo() {
        const currentUserAccount = await getCurrentUser()
        const currentUserType =  currentUserAccount.prefs['UserType']
        if(currentUserType != null && (currentUserType.toLowerCase() === 'sponsor')) {
            // setRegisterRole(true)
            setUserType('sponsor')
        } else if(currentUserType != null && (currentUserType.toLowerCase() === 'influencer')) {
            // setRegisterRole(true)
            setUserType('influencer')
        }
        setLoading(false)
    }

    console.log("User Type is : ",userType)
    console.log("Is user registedred ", isRegisterUser);
    // If user has been already registered , skip to the progile page
    if(isRegisterUser) {
        if(userType != null && userType === 'sponsor') {        
            console.log("usertype set to sponosor")
            router.push("/sp/discover")
        } else if (userType != null && userType === 'influencer') {
            console.log("usertype set to influencer")
            router.push("/inf/discover")
        } 
    }

    if (userType && userType == "") {
        
        return(
            <div>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <RegisterRole setUserType={setUserType} />
                    )
                }
            </div>
            )
    }  

    if(!isRegisterUser && userType === 'sponsor') {
        return  (
            <div>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <RegisterSponsor setRegisterUser={setRegisterUser} />
                    )
                }
            </div>
        )
    }

    if(!isRegisterUser && userType === 'influencer') {
        return  (
            <div>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <RegisterInfluencer setRegisterUser={setRegisterUser} />
                    )
                }
            </div>
        )
    }
    // default
    return (
        <div></div>
    )

}