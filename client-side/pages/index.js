import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resturant App</title>
        <meta name="description" content="Best Resturant App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page</h1>
    </div>
  )
}
