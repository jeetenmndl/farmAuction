'use client'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Textarea } from './ui/textarea'
import Image from 'next/image'
import { UploadButton } from '@/lib/Uploadthing'
import ResponseImage from './ResponseImage'
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link'
// import postRoom from '@/lib/actions/postRoom'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import postItem from '@/lib/actions/postItem'


 
const formSchema = z.object({
  name: z.string().min(3, {
    message : "At least 3 characters.",
  }),
  description: z.string().min(10, {
    message : "At least 10 characters.",
  }),
  location: z.string().min(3, {
    message : "At least 3 characters.",
  }),
  startingBid: z.string().min(3, {
    message : "At least 3 characters.",
  }),
  category: z.string().min(3, {
    message : "Must be 10 numbers.",
  }),
})


const SellItem = () => {

    const router = useRouter();
    
    const {toast} = useToast();

    const [mustLog, setMustLog] = useState(false);
    const [loading, setloading] = useState(false)
    // const [check, setCheck] = useState("");
    const [responseImage, setResponseImage] = useState([]);
    
    
    useEffect(() => {
        isLogged();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  
      const isLogged = ()=>{
        // setCheck(localStorage.getItem("auth-token"));
        let check = localStorage.getItem("token")
        // console.log(check)
        if(check == null || check == ""){
          setMustLog(true);
          toast({
            title: "Alert !",
            description: "You must log in to post the item .",
        })
          router.push("/login");
        }
  
      }

      const updateImages = (newImage)=>{
        console.log("responseImage:", responseImage)
        let tempImage = responseImage;
        tempImage.push(newImage);
        setResponseImage(tempImage);
        console.log(responseImage);
    }



    
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            description:"",
            location:"",
            startingBid:"",
            category:"",
        },
      })

     
      // 2. Define a submit handler.
     async function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        let user = localStorage.getItem("username");
        let token = localStorage.getItem("token");

        // console.log(values)
        // console.log(responseImage)
        // console.log(user)
        
        try {
            setloading(true);
            const response = await postItem(values, responseImage, user);
            console.log("in selling", response)
            if(response.posted==true){
                toast({
                    title: "Success !",
                    description: "Room posted successfully.",
                })
                setTimeout(() => {
                    router.push("/");
                }, 3000);
            }
            else{
              toast({
                title: "Oops !",
                description: "Some error occured.",
                variant: "destructive",
            })
            }
        } catch (error) {
            console.log(error)
            toast({
                title: "Oops !",
                description: "Some error occured.",
                variant: "destructive",
            })
        }finally{
            setloading(false);
        }
      }


  return (
    <>
    <div className={mustLog?'hidden':'grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-20'}>

    <section className='w-full min-h-dvh py-8'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            
        {/* Step 1: location  */}
        <Card> 
            <CardHeader>
                <CardTitle>Upload Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">

            {/* item name */}
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Item Name</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Potato..." {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            {/* category */}
            <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose One" className="placeholder:text-gray-400 font-light" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="fertilizers">Fertilizers</SelectItem>
                  <SelectItem value="seeds">Seeds</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="crops">Crops</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>

                </SelectContent>
              </Select>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            {/* location  */}
            <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Shanti Chowk, Biratnagar..." {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />


            {/* starting bid */}
            <FormField
            control={form.control}
            name="startingBid"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Starting Bid</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="5000" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            {/* description  */}
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="Write about your fruits, vegetables, and crops."
                    className="h-32"
                    {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

        <p className='text-center mt-4 text-xs'>Upload images one by one.</p>

        <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            // alert("Upload Completed");
            updateImages(res[0].url);
            toast({
                title: "Uploaded !",
                description: "This image was uploaded sucessfully.",
            })
            }}
            onUploadError={(error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
            }}
            className='w-full'
        />



       </CardContent>
       <CardFooter>
       { 
                !loading
                ?
                <div className='w-full space-y-3'>
                <Button type="submit" className="w-full">Submit</Button>
                </div>
                :
                <Button className="w-full" disabled>
                    <Loader2 className=" h-4 w-4 animate-spin" />
                </Button>
            }
       </CardFooter>
       </Card>









           



        </form>
        </Form>

        
    </section>

    </div>
    
    <section className={mustLog?'flex w-full justify-center px-4 md:px-32 py-32':'hidden'}>
        <Card>
            <CardHeader>
            <CardTitle>You must log in.</CardTitle>
            </CardHeader>
            <CardContent>
            <CardDescription>Log in or register to post your room. So that you can keep track of your order and verify its you.</CardDescription>
            </CardContent>
            <CardFooter>
                <Link href="/auth">
                <Button className="w-32">
                    Log in
                </Button>
                </Link>
            </CardFooter>
        </Card>
    </section>
    </>
  )
}

export default SellItem