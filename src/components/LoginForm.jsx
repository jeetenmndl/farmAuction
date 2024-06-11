"use client"

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import checkLogin from '@/lib/actions/checkLogin'
import Link from 'next/link'
  


const formSchema = z.object({
    username: z.string().min(3, {
      message : "At least 3 characters.",
    }),
    password: z.string().min(8, {
      message : "Minimum 8 characters.",
    }),
    
  })

const LoginForm = () => {

    const router = useRouter()
    const {toast}= useToast();
    const [loading, setLoading] = useState(false);
    

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username:"",
            password:"",
    },
    })

    // 2. submit handler for submit
    async function onSubmit(values) {
        // console.log(values);
        try {
            setLoading(true);
            const response = await checkLogin(values);
            // console.log("in login page", response);
            if(response.login==true){
                toast({
                    title: "Congratulations !",
                    description: "Logged in sucessfully.",
                })

                localStorage.setItem("username", values.username)
                localStorage.setItem("token", response.access)
                

                router.push("/")
            }
            else{
                toast({
                    title: "Oops !",
                    description: response.error,
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
            setLoading(false);
        }
    }



  return (
    <section className='flex justify-center'>    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-[400px]">

    <Card>
        <CardHeader>
            <CardTitle>Login to Farmauction</CardTitle>
            <CardDescription>Fill the details to Login </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            {/* team name */}
            <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="pt-1">Userame</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Enter username" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />


            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                <FormControl>
                   <Input type="password" className="placeholder:text-gray-400 font-light" placeholder="********" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

        </CardContent>
        <CardFooter className="flex flex-col">
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
            <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </div>
        </CardFooter>
    </Card>


    </form>
    </Form>
    </section>

  )
}

export default LoginForm