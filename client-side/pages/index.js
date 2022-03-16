import Head from 'next/head'
import Image from 'next/image'
import Products from '../components/Product/Products'
import Slider from '../components/Slider/Slider'
import styles from '../styles/Home.module.css'
import Propular from '../components/Product/Propular'
import axios from 'axios'
export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resturant App</title>
        <meta name="description" content="Best Resturant App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider></Slider>
      <Products products={products}></Products>
      <Propular></Propular>
    </div>
  )
}

/* Facthing Data from database */

export async function getServerSideProps() {
  const products = await axios.get('http://localhost:3000/api/product')
  return {
    props: {
      products: products.data
    },
  }
}
