import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from '../../styles/Propular.module.css'
import Image from 'next/image'
const Propular = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={style.container}>
            <div className={style.sectionHeader}>
                <h2 className={style.sectionTitle}>Most Propular Items</h2>
            </div>
            <Slider {...settings}>
                <div className={style.singleItem}>
                    <Image src="/img/pizza.png" width="200px" height="200px" />
                    <p>Product Title</p>
                    <p>Price: $25</p>
                </div>
                <div className={style.singleItem}>
                    <Image src="/img/pizza.png" width="200px" height="200px" />
                    <p>Product Title</p>
                    <p>Price: $25</p>
                </div>
                <div className={style.singleItem}>
                    <Image src="/img/pizza.png" width="200px" height="200px" />
                    <p>Product Title</p>
                    <p>Price: $25</p>
                </div>
                <div className={style.singleItem}>
                    <Image src="/img/pizza.png" width="200px" height="200px" />
                    <p>Product Title</p>
                    <p>Price: $25</p>
                </div>
                <div className={style.singleItem}>
                    <Image src="/img/pizza.png" width="200px" height="200px" />
                    <p>Product Title</p>
                    <p>Price: $25</p>
                </div>
                <div className={style.singleItem}>
                    <Image src="/img/pizza.png" width="200px" height="200px" />
                    <p>Product Title</p>
                    <p>Price: $25</p>
                </div>
                <div className={style.singleItem}>
                    <Image src="/img/pizza.png" width="200px" height="200px" />
                    <p>Product Title</p>
                    <p>Price: $25</p>
                </div>
            </Slider>
        </div>
    )
}

export default Propular