'use client'
import { account, ID } from "@/app/appwrite";

export const loginUsingEmail = async (email, password) => {
  return await account.createEmailSession(email, password);
};

export const loginOAuthGithub = () => {
  return account.createOAuth2Session('github', 'http://localhost:3000/dashboard', "http://localhost:3000/login");
};

export const logout = async () => {
  return await account.deleteSession("current");
};

export const signupUsingEmail = async(email,password) => {
    return await account.create(ID.unique(), email, password);
}

export const isLoggedIn = async()=>{
  
    const data = await account.get('current')
    console.log("current user data",data)
    return !!data
 
}
export const getCurrentUser=async()=>{
  try{
    return await account.get('current')
  }catch(ex) {
    console.log("getCurrentUser : ",ex)
  }
}


