import React, { useState } from 'react'
import style from '../../styles/Details.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addCarts } from '../../redux/cartSlice.js'
const Details = ({ product }) => {
    const { images, name, prices, desc, extraOptions } = product
    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(prices[0])
    const [extras, setExtras] = useState([]);
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const changePrice = (number) => {
        setPrice(price + number)
    }
    const handleSize = (sizeIndex) => {
        const diferentPrice = prices[sizeIndex] - prices[size]
        setSize(sizeIndex)
        changePrice(diferentPrice)
    }
    const handleChange = (e, option) => {
        const checked = e.target.checked;
        if (checked) {
            changePrice(parseInt(option.price));
            setExtras((prev) => [...prev, option]);
        } else {
            changePrice(parseInt(-option.price));
            setExtras(extras.filter((extra) => extra._id !== option._id));
        }
    };

    const handleCart = () => {
        dispatch(addCarts({ ...product, extras, price, qty }))
    }


    return (
        <div className={style.container}>
            <div className={style.productDetails}>
                <div className={style.leftSide}>
                    <div className={style.imageContainer}>
                        <Image src={images} objectFit="contain" width="400px" height="400px" />
                    </div>
                </div>
                <div className={style.rightSide}>
                    <div className={style.textContainer}>
                        <h3 className={style.title}>{name}</h3>
                        <p className={style.price}>${price}</p>
                        <p className={style.desc}>{desc}</p>
                    </div>
                    <div className={style.aditional}>
                        <h3>Aditional Information</h3>
                        <div className={style.sizeItem}>
                            <div className={style.item} onClick={() => handleSize(0)}>
                                <Image objectFit="contain" src="/img/size.png" width="30px" height="30px" />
                                <span>Small</span>
                            </div>
                            <div className={style.item} onClick={() => handleSize(1)}>
                                <Image objectFit="contain" src="/img/size.png" width="40px" height="40px" />
                                <span>Medium</span>
                            </div>
                            <div className={style.item} onClick={() => handleSize(2)}>
                                <Image objectFit="contain" src="/img/size.png" width="50px" height="50px" />
                                <span>Large</span>
                            </div>
                        </div>
                        <div className={style.ingredients}>
                            <h3>Choose aditional ingredients</h3>
                            {extraOptions?.map((option) => (
                                <div className={style.options} key={option._id}>
                                    <input onChange={(e) => handleChange(e, option)} type="checkbox" id={option.text} name={option.text} className={style.checkBox} />
                                    <label htmlFor={option.text} className={style.label}>{option.text}</label>
                                </div>
                            ))}
                        </div>
                        <div className={style.cart}>
                            <input onChange={(e) => setQty(e.target.value)} defaultValue={1} type="number" className={style.cartQty} />
                            <button type="submit" className={style.cartBtn} onClick={handleCart} >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const product = await axios.get(`http://localhost:3000/api/product/${params.id}`)
    return {
        props: {
            product: product.data
        },
    }
}
export default Details


