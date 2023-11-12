"use client"
import {useConvexAuth} from "convex/react"

import UseScrollTop from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Logo from "./logo"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/spinner"

const Navbar = () => {
  const {isAuthenticated,isLoading}= useConvexAuth()
    const scrolled = UseScrollTop()

  return (
    <div className={cn(
        " z-50 bg-background fixed dark:bg-[#1F1F1F] top-0 flex items-center w-full p-6 ", scrolled && " border-b shadow-sm"
    )}>
        <Logo/>
        <div className=" md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 ">
          {isLoading&&(<Spinner />)}
          {!isAuthenticated&&!isLoading&&(<>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Log in
              </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button  size="sm">
              Get NafcyNotion Free
              </Button>
          </SignInButton>
          </>)}
          {isAuthenticated&&!isLoading&&(<>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
              
              Enter Notion
              </Link>
              </Button>
              <UserButton afterSignOutUrl="/"/>
          </>)}
          <ModeToggle/>
        </div>
    </div>
  )
}
export default Navbar
