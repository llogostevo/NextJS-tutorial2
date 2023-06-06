import getUser from '@/app/lib/getUser'
import getUserPosts from '@/app/lib/getUserPosts'
import { Suspense } from 'react'
import React from 'react';
import UserPosts from './components/UserPosts';
import type { Metadata } from "next"

// creating a data type for paramaters
type Params ={
    params: {
        userId:string
    }
}

// async function for dynamic metadata
export async function generateMetadata({params: {userId}}: Params ): Promise<Metadata> {
  // a promise for the get user function and assigning it to userData
  const userData: Promise<User> = getUser(userId)
  // an await to collect a User data 
  const user: User = await userData;

  return {
    // return the title and description for the meta data
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

// async functino for the User Page
export default async function UserPage( {params: {userId}}: Params ) {
  //get the user as a promise from the get user function
  const userData: Promise<User> = getUser(userId);
  //get the posts as a promise for hte userposts data
  const userPostsData: Promise<Posts[]> = getUserPosts(userId)

  // const [user,userPosts] = await Promise.all([userData, userPostsData])
 
  // await the user data and asign it to the user
  const user  = await userData;

  return (
    <>
    <h1>{user.name}</h1>
    {/* a suspense to fallback to loading if waiting for the data to load, suspense taking place */}
    <Suspense fallback={<h2>Loading...</h2>}>

  {/* a componeont to get the userPosts Data as a seperate component as a promise */}
      <UserPosts promise={userPostsData} />

    </Suspense>

{/* this is an alternative way to get the userPosts */}
    {/* {
    userPosts.map((post)=>{
      return(
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

        </>
      )
    })

    
    } */}
    </>
  )
}

