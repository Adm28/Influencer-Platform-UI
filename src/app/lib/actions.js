import { signIn } from '@/app/lib/authUtilities';
import { AuthError } from 'next-auth';
// ...
 
export async function authenticate(_,formData) {
  try {
    console.log("formData : ",formData)
    for (var [key, value] of formData.entries()) { 
      console.log("formdata",key, value);
    }
    await signIn("credentials",formData)
  } catch (error) {
    console.log("error occured : ",error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}