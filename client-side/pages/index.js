import Head from 'next/head'
import Image from 'next/image'
import Products from '../components/Product/Products'
import Slider from '../components/Slider/Slider'
import styles from '../styles/Home.module.css'
import Propular from '../components/Product/Propular'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resturant App</title>
        <meta name="description" content="Best Resturant App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider></Slider>
      <Products></Products>
      <Propular></Propular>
    </div>
  )
}
