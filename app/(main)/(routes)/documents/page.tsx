"use client"
import Image from "next/image"
import {useUser} from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"
const Documents = () => {
  const {user} = useUser()
  const create = useMutation(api.documents.create)

  const onCreate=()=>{
    const promise = create({title:"Untitled"})
    toast.promise(promise,{
      loading:"Creating note...",
      success:"Note created",
      error:"Failed to create note"
    })
  }
  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-4">
      <Image 
        alt="Empty"
        src="/empty.png"
        height="300"
        width="300"
        className=" dark:hidden"
      />
      <Image 
        alt="Empty"
        src="/empty-dark.png"
        height="300"
        width="300"
        className=" dark:block hidden"
      />
      <h2 className=" text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className=" h-4 w-4 mr-2"/>
        Create a note
      </Button>
    </div>
  )
}
export default Documents