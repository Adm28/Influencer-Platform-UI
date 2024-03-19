"use client"
import React, { useState } from 'react';
import {
    Card,
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
import { useForm } from "react-hook-form"
import { setAccountPrefs } from '@/app/lib/appwriteUtilities';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/app/components/ui/input"

function RegisterSponsor({ setRegisterUser }) {

    async function onSubmit(data) {
        console.log("register on submit called", data)
        // TODO
        // Call the appwrite function to create the user profile  
        setTimeout(() => {
            console.log("set timeout in register infleuncer to mimic network call to fetch profile info");
        }, 2000);

        setRegisterUser(true)
    }

    const formSchema = z.object({
        OrganisationName: z.string().refine(value => value.toLowerCase() != "", {
            message: "Please select your occupation"
        }),
        OrganistaionURL : z.string().refine(value => value.toLowerCase() != "", {
            message: "The linkedin Url cannot be empty"
        }),
        FirstName: z.string().refine(value => value.toLowerCase() != "", {
            message: "First Name cannot be empty"
        }),
        LastName: z.string().refine(value => value.toLowerCase() != "", {
            message: "LastName Name cannot be empty"
        }),
        OrganisationDesc: z.string().refine(value => value.toLowerCase() != "", {
            message: "Organisation Description cannot be empty"
        }),

    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            OrganisationName:"",
            OrganistaionURL: "",
            FirstName: "",
            LastName: "",
            OrganisationDesc : ""
        }
    })
    return (
        <Card className="w-[600px] h-[700px] my-20 mx-auto flex-col ">
            <CardHeader className="text-center font-bold">A few quick questions to get you ramped up </CardHeader>
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
                            name="OrganistaionURL"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website</FormLabel>
                                    <FormControl>
                                        <Input value="OrganistaionURL" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="OrganisationName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Organisation Name</FormLabel>
                                    <FormControl>
                                        <Input value="OrganisationName" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="OrganisationDesc"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Describe your Organisation's mission statement</FormLabel>
                                    <FormControl>
                                        <Input value="OrganisationDesc" {...field} />
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

export default RegisterSponsor;
