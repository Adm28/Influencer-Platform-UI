"use client"
import React, { useState } from 'react';
import {   Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle, 
		CardBody
} from "@/components/ui/card"
import { 
		DropdownMenu,
		DropDown,
		DropdownMenuItem,
 } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
 import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger,
		SelectValue,
	} from "@/components/ui/select"
import Image from "next/image"
import {
		Form,
		FormControl,
		FormDescription,
		FormField,
		FormItem,
		FormLabel,
		FormMessage,
	} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/app/components/ui/input"
import { useForm } from "react-hook-form"
import { setAccountPrefs } from '@/app/lib/appwriteUtilities';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

function RegisterInfluencer ({ setRegisterUser }) {

    async function onSubmit(data) {

        console.log("register on submit called",data)
        // TODO
        // Call the appwrite function to create the user profile    
        setTimeout(() => {
            console.log("set timeout in register infleuncer to mimic network call to fetch profile info");
          }, 2000);
        // Call the setUserCreated.
        setRegisterUser(true)

    }

    const formSchema = z.object({
        Occupation: z.string().refine(value => value.toLowerCase() != "" , {
            message:"Please select your occupation" }),
        HighestEngagement: z.string().refine(value => value.toLowerCase() != "" , {
            message:"Please select the valid engagement range" }), 
        LinkedinURL : z.string().refine(value => value.toLowerCase() != "", {
            message : "The linkedin Url cannot be empty"
        }),
        FirstName : z.string().refine(value => value.toLowerCase() != "", {
            message : "First Name cannot be empty"
        }),
        LastName : z.string().refine(value => value.toLowerCase() != "", {
            message : "Last Name cannot be empty"
        }), 
    })
    const form = useForm({
        resolver : zodResolver(formSchema),
        defaultValues: {
            Occupation : "",
            HighestEngagement : "",
            LinkedinURL : "",
            FirstName : "",
            LastName : ""
        }
    })
    return (
        <Card className="w-[600px] h-[600px] my-20 mx-auto flex-col ">
            <CardHeader className="text-center font-bold">A few quick questions to get you ramped you up.</CardHeader>
                <CardContent className="flex flex-row justify-between" >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                            <FormField
                                name="FirstName"
                                control={form.control}
                                render={({ field }) => (
                                <FormItem>
                                <FormLabel className="" >First Name</FormLabel>
                                <FormControl>
                                    <Input value="FirstName" {...field} />
                                 </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                                name="LastName"
                                control={form.control}
                                render={({ field }) => (
                                <FormItem>
                                <FormLabel className="" >Last Name</FormLabel>
                                <FormControl>
                                    <Input value="LastName" {...field} />
                                 </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                                name="Occupation"
                                control={form.control}
                                render={({ field }) => (
                                <FormItem>
                                <FormLabel className="" >Occupation</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select the occupation that best describes you" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Student">Student</SelectItem>
                                        <SelectItem value="SoftwareEngineer">Software Engineer</SelectItem>
                                        <SelectItem value="DataScientist">Data Scientist</SelectItem>
                                        <SelectItem value="ComputerScientist">Computer Scientist</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                                name="HighestEngagement"
                                control={form.control}
                                render={({ field }) => (
                                <FormItem>
                                <FormLabel className="" >Highest Engagement In a Post</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                            <SelectValue placeholder="Select the range that captures your highest engagement in a post" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="0-5k">1k-5k</SelectItem>
                                        <SelectItem value="5k-10k">5k-10k</SelectItem>
                                        <SelectItem value="10k-15k">10k-15k</SelectItem>
                                        <SelectItem value="15k-20k">15k-20k</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                                name="LinkedinURL"
                                control={form.control}
                                render={({ field }) => (
                                <FormItem>
                                <FormLabel className="" >LinkedinURL</FormLabel>
                                <FormControl>
                                    <Input value="Linkedin URL" {...field} />
                                 </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit">Next</Button>
                        </form>
                    </Form>
                    </CardContent>
        </Card>
    )
}

export default RegisterInfluencer;
