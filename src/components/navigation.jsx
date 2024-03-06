import Link from "next/link";

import { cn } from "@/app/lib/utils";

export function Navigation({
  className,
  ...props}) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/discover"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Discover
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Reports
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Proposals
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Invoices
      </Link>
    </nav>
  );
}
