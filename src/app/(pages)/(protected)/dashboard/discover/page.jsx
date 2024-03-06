"use client"
import { Inbox } from "@/components/inbox";
import { Navigation } from "@/components/navigation";
import { Notifications } from "@/components/notfications";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Search, Twitter } from "lucide-react";

export default function Discover() {
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
        <div className="flex flex-col space-y-12 p-8">
          <div className="flex flex-col items-start justify-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Discover</h2>
            <p className="text-gray-600">
              Tailored talent matches to help you find the right person faster.
            </p>
          </div>

          <div className="w-full max-w-6xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">
                Influencers Skilled in UI/UX Design
              </h2>
              <Button
                variant="outline"
                className="flex items-center justify-start space-x-2 rounded-full border-green-700 ring-green-700"
              >
                <Search className="w-4 h-4 text-green-700" />
                <p className="text-green-700">See more like this</p>
              </Button>
            </div>
            <Carousel className="w-full max-w-6xl">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-3 basis-1/4">
                    <Card className="rounded-xl">
                      <CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                        <div className="flex flex-1 w-full items-center justify-center">
                          <Avatar className="w-24 h-24">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>

                        <div className="flex flex-col items-center justify-start space-y-0.5">
                          <h3 className="font-medium uppercase">
                            Vasken Mouradian
                          </h3>
                          <p className="text-gray-500">Sr. UX Engineer</p>
                          <p className="text-gray-500">$10 /post</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </div>

          <div className="w-full max-w-6xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">
                Talent In India
              </h2>
              <Button
                variant="outline"
                className="flex items-center justify-start space-x-2 rounded-full border-green-700 ring-green-700"
              >
                <Search className="w-4 h-4 text-green-700" />
                <p className="text-green-700">See more like this</p>
              </Button>
            </div>
            <Carousel className="w-full max-w-6xl">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-3 basis-1/4">
                    <Card className="rounded-xl">
                      <CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                        <div className="flex flex-1 w-full items-center justify-center">
                          <Avatar className="w-24 h-24">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>

                        <div className="flex flex-col items-center justify-start space-y-0.5">
                          <h3 className="font-medium uppercase">
                            Vasken Mouradian
                          </h3>
                          <p className="text-gray-500">Sr. UX Engineer</p>
                          <p className="text-gray-500">$10 /post</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </div>

          <div className="w-full max-w-6xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">
                Talent with high success delivery rate
              </h2>
              <Button
                variant="outline"
                className="flex items-center justify-start space-x-2 rounded-full border-green-700 ring-green-700"
              >
                <Search className="w-4 h-4 text-green-700" />
                <p className="text-green-700">See more like this</p>
              </Button>
            </div>
            <Carousel className="w-full max-w-6xl">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-3 basis-1/4">
                    <Card className="rounded-xl">
                      <CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                        <div className="flex flex-1 w-full items-center justify-center">
                          <Avatar className="w-24 h-24">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>

                        <div className="flex flex-col items-center justify-start space-y-0.5">
                          <h3 className="font-medium uppercase">
                            Vasken Mouradian
                          </h3>
                          <p className="text-gray-500">Sr. UX Engineer</p>
                          <p className="text-gray-500">$10 /post</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
