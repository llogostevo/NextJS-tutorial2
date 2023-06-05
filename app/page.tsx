import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <p><Link href="./about">About</Link></p>

    </main>
  )
}
