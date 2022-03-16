import React from 'react'
import style from '../../styles/SinglePro.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Single = ({ product }) => {
    const { images, name, prices, _id } = product
    return (
        <div className={style.singleProduct}>

            <Image src={images} width="250px" height="250px" />
            <Link href={`/product/${_id}`} passHref>
                <h3 className={style.itemTitle}>{name}</h3>
            </Link>
            <p className={style.itemPrice}>Price: ${prices[0]}</p>
        </div>
    )
}

export default Single