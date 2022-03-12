import React from 'react'
import style from '../../styles/SinglePro.module.css'
import Image from 'next/image'
const Single = () => {
    return (
        <div className={style.singleProduct}>
            <Image src="/img/pizza1.png" width="250px" height="250px" />
            <h3 className={style.itemTitle}>Priduct Name Here</h3>
            <p className={style.itemPrice}>Price: $40</p>
        </div>
    )
}

export default Single