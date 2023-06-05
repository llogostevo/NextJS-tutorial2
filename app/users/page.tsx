import type { Metadata } from "next"
import getAllUsers from "../lib/getAllUsers"
import Link from "next/link";

export const metadata : Metadata = {
  title: "Users",
  description: "Users area"
}

export default async function Users() {
    const usersData: Promise<User[]> = getAllUsers();

    const users = await usersData;

   
    // variable to hold the content pulled from the fetch
    const content = (
      <section>
        <h2>
          <Link href="/">Back to Home</Link>
        </h2>
        <br />
        {/* map through each user from the data pull */}
        {/* the final fully mapped newly returned array will appear in here wihtin the {} code block*/}
        {users.map(user => {
          return(
            // return using a react fragment
            // the key is assigned to the individual tag
            // a link is provided that links to the dynamic page of the id
            // the link displays as the users name
            <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>  
            </p>
            <br />
            </>
          )
        })}
      </section>
    ) 
    return (
      // return the content variable from earlier
      content
    )
  }
