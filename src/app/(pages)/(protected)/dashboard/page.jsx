"use client"
import { Metadata } from "next";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/card";
import { Notifications } from "@/components/notfications";
import { Inbox } from "@/components/inbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Navigation } from "@/components/navigation";
import { Twitter } from "lucide-react";
import {getCurrentUser} from "@/app/lib/authUtilities"
import { useState,useEffect } from "react";

export default function DashboardPage() {

  const [currentUser,setCurrentUser] = useState()
  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        console.log("Current user : ",response)
        setCurrentUser(response)

      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
      });
    }, []);

  if (currentUser && currentUser.prefs && currentUser.prefs.type) {
   
    if (currentUser.prefs.type === "sponsor") {
        console.log("User info ")
        console.log("its a preference")
      // Do something for admin user
    } else if (currentUser.prefs.type === "influencer") {
      // Do something for regular user
      console.log("the user is an influencer")
    } else {
      // Do something for other user types

    }
  }


  return (
    <>
      <div className="flex-col flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div className="flex space-x-4">
              <Twitter className="text-blue-500 fill-blue-500" />
              <Navigation />
            </div>

            <div className="ml-auto flex items-center space-x-4">
              <Inbox />
              <Notifications />
              <ProfileDropdown />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-8">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs
            defaultValue="best-matches"
            className="max-w-4xl space-y-6 rounded-md mx-auto pt-8"
          >
            <TabsList>
              <TabsTrigger value="best-matches" className="rounded-md">
                Best Matches
              </TabsTrigger>
              <TabsTrigger value="most-recent" className="rounded-md">
                Most Recent
              </TabsTrigger>
              <TabsTrigger value="saved-sponsors" className="rounded-md">
                Saved Sponsors
              </TabsTrigger>
            </TabsList>

            <TabsContent value="best-matches" className="space-y-2">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </TabsContent>

            <TabsContent value="most-recent" className="space-y-2">
              <Card />
              <Card />
              <Card />
              <Card />
            </TabsContent>

            <TabsContent value="saved-sponsors" className="space-y-2">
              <Card />
              <Card />
              <Card />
            </TabsContent>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </Tabs>
        </div>
      </div>
    </>
  );
}
