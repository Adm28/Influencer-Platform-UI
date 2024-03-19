'use client'
import { account, ID, databases } from "@/app/lib/appwrite";


export const loginUsingEmail = async (email, password) => {
  return await account.createEmailPasswordSession(email, password);
};

export const loginOAuthGithub = () => {
  return account.createOAuth2Session('github', 'http://localhost:3000/', "http://localhost:3000/login");
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
    console.log("exception while getCurrentUser : ",ex)
  }
}

export const createDocument = async(db, collection, id, data) => {
  try{
    return await databases.createDocument(db, collection, id, data)
  } catch(ex) {
    console.log("Error occured while creating the document" , ex)
  }
}

export const getDocument = async(db, collection, id) => {
  try{
    return await databases.getDocument(db,collection,id);
  } catch(ex) {
    console.log("Get Document is : ", ex)
  }
}

export const setAccountPrefs = async(prefs) => {
  try{
    console.log("setaccountpreferences ", prefs)
    return await account.updatePrefs(prefs)
  } catch(ex) {
    console.log("setAccountPrefs ran into the following exception : ", ex)
  }
}

