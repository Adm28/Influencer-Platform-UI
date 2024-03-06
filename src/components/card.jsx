import { cn } from "@/app/lib/utils";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

export function Card() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">
                  Seeking Influencer in blockchain space
                </div>
                {false && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )}
              </div>
              <div className={cn("ml-auto text-xs", "text-foreground")}>
                2 months ago
              </div>
            </div>
            <div className="text-xs font-medium">
              Pay: $100 - $350 per post. Duration: 3 months, Frequency: 1
              post/week. Reach: 5k+
            </div>
          </div>
          <div className="text-xs">
            <p className="line-clamp-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sit explicabo veritatis voluptates illum corrupti earum. Saepe
              voluptas vero iure illum omnis ratione necessitatibus, eveniet
              ullam molestias vitae obcaecati eaque.
            </p>
            <Link href="#" className="underline">
              Learn More
            </Link>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1">
              <Badge className="rounded-md">Blockchain</Badge>
              <Badge className="rounded-md">Web 3</Badge>
              <Badge className="rounded-md">Crypto</Badge>
            </div>
            <Button variant="outline" className="px-2 py-1 h-min text-sm">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
