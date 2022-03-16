import React from 'react'
import style from '../../styles/Navbar.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'
const Navbar = () => {
    const cartQty = useSelector((state) => state.cart.cartQty)
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.callButton}>
                    <Image src="/img/telephone.png" width="30px" height="30px" alt="Telephone" />
                </div>
                <div className={style.texts}>
                    <div className={style.text}>Order Now</div>
                    <div className={style.text}>123 345 598</div>
                </div>
            </div>
            <div className={style.item}>
                <ul className={style.mainMenuList}>
                    <li className={style.listItem}>Home</li>
                    <li className={style.listItem}>Products</li>
                    <li className={style.listItem}>About</li>
                    <Image src="/img/logo.png" width="160px" height="69px" alt="Logo" />
                    <li className={style.listItem}>Event</li>
                    <li className={style.listItem}>Home</li>
                    <li className={style.listItem}>Contact</li>
                </ul>
            </div>
            <div className={style.item}>
                <Link href="/cart" passHref>
                    <div className={style.cartButton}>
                        <Image src="/img/cart.png" width="50px" height="50px" />
                        <div className={style.counter}>{cartQty}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar