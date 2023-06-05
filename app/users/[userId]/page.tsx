import getUser from '@/app/lib/getUser'
import getUserPosts from '@/app/lib/getUserPosts'

import React from 'react'

type Params ={
    params: {
        userId:string
    }
}

export default async function UserPage( {params: {userId}}: Params ) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Posts[]> = getUserPosts(userId)

  const [user,userPosts] = await Promise.all([userData, userPostsData])
 
  return (
    <>
    <h1>{user.name}</h1>
    {
    userPosts.map((post)=>{
      return(
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )
    })

    
    }
    </>
  )
}
