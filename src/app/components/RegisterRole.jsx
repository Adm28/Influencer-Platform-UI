"use client"

import React, { useLayoutEffect, useState } from 'react';
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
import { useForm } from "react-hook-form"
import { setAccountPrefs } from '@/app/lib/appwriteUtilities';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/app/components/ui/input"

function RegisterRole({setUserType}) {
		
		async function onRoleSubmit(data) {
			console.log("register on submit called",data)
			const userPrefs = await setAccountPrefs({"UserType" : data['UserRole']})
			console.log("set account preferences succeeded", userPrefs)
			setUserType(data['UserRole'])
		}

		const formSchema = z.object({
			UserRole: z.string().refine(value => value.toLowerCase() === "influencer" || value.toLowerCase() === "sponsor" , {
				message:"Please select a role"
			})
		})
		const form = useForm({
			resolver : zodResolver(formSchema),
			defaultValues: {
				UserRole : ""
			}
		})
		return (
				<Card className="w-[600px] h-[400px] my-20 mx-auto flex-col ">
						<CardHeader className="text-center font-bold">Select the role that best suits you</CardHeader>
							<CardContent className="flex flex-row justify-between" >
								<Form {...form}>
										<form onSubmit={form.handleSubmit(onRoleSubmit)} className="w-2/3 space-y-6">
												<FormField
													name="UserRole"
													control={form.control}
													render={({ field }) => (
													<FormItem>
													<FormLabel className="" >Role</FormLabel>
													<Select onValueChange={field.onChange} defaultValue={field.value}>
															<FormControl>
															<SelectTrigger>
																	<SelectValue placeholder="Select the role that best suits you" />
															</SelectTrigger>
															</FormControl>
															<SelectContent>
															<SelectItem value="influencer">Influencer</SelectItem>
															<SelectItem value="sponsor">Sponsor</SelectItem>
															</SelectContent>
													</Select>
													<FormDescription className="text-red-700 text-xs">
															Once the role is selected it cannot be modified later
													</FormDescription>
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

export default RegisterRole;