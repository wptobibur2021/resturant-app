import React, { useState } from 'react'
import style from '../../styles/Slider.module.css'
import Image from 'next/image'
const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleArrow = (direction) => {
        if (direction === 'l') {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === 'r') {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    const sliderImg = [
        '/img/slider/slider1.jpg',
        '/img/slider/slider5.png',
        '/img/slider/slider4.jpg',
    ]
    console.log('Index No: ', index)
    return (
        <div className={style.container}>
            <div className={style.sliderArrow} style={{ left: 0 }} onClick={() => handleArrow('l')} >
                <Image src="/img/arrowl.png" layout="fill" objectFit="contain" />
            </div>
            <div className={style.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
                {sliderImg?.map((img, i) => (
                    <div className={style.imgContainer} key={i}>
                        <Image src={img} layout="fill" objectFit='cover' style={{ zIndex: '999' }} />
                    </div>
                ))}

            </div>
            <div className={style.sliderArrow} style={{ right: 0 }} onClick={() => handleArrow('r')} >
                <Image src="/img/arrowr.png" layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}

export default Slider