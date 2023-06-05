import React from 'react'

export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    // check if there is an error
    if(!res.ok) throw new Error('Failed to Fetch Data')
   
  return (
    // return the response object and convert to json
    res.json()
  )
}
