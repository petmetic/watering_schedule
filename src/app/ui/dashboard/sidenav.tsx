"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import WsLogo from "@/app/ui/watering-s-logo";
import { AddIcon, EditIcon } from "@/components/ui/icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Add new plant",
    href: "/dashboard/plants/add",
    description: "Add a new plant to the list.",
  },
  {
    title: "Edit plant",
    href: "/dashboard/plants/[id]/edit/",
    description: "Edit a plant from the list.",
  },
];

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <NavigationMenu className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-600 p-4 md:h-40"
          href="/dashboard"
        >
          <div className="w-32 text-white md:w-40">
            <WsLogo />
          </div>
        </Link>
        <NavigationMenuList className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavigationMenuItem>
            <Link href="/dashboard/plants/add/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <AddIcon />
                <div className="ml-4">Add new plant</div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/*<NavigationMenuItem>*/}
          {/*  <Link href="#" legacyBehavior passHref>*/}
          {/*    <NavigationMenuLink className={navigationMenuTriggerStyle()}>*/}
          {/*      <EditIcon />*/}
          {/*      <div className="ml-4">Edit plant</div>*/}
          {/*    </NavigationMenuLink>*/}
          {/*  </Link>*/}
          {/*</NavigationMenuItem>*/}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
