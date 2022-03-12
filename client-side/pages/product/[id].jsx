import React, { useState } from 'react'
import style from '../../styles/Details.module.css'
import Image from 'next/image'
const Details = () => {
    const [size, setSize] = useState(0)
    const product = {
        name: 'Product Name',
        id: '12345',
        price: [13.2, 15, 18.5],
        img: '/img/pizza.png',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    }
    return (
        <div className={style.container}>
            <div className={style.productDetails}>
                <div className={style.leftSide}>
                    <div className={style.imageContainer}>
                        <Image src={product.img} objectFit="contain" width="400px" height="400px" />
                    </div>
                </div>
                <div className={style.rightSide}>
                    <div className={style.textContainer}>
                        <h3 className={style.title}>{product.name}</h3>
                        <p className={style.price}>${product.price[size]}</p>
                        <p className={style.desc}>{product.desc}</p>
                    </div>
                    <div className={style.aditional}>
                        <h3>Aditional Information</h3>
                        <div className={style.sizeItem}>
                            <div className={style.item} onClick={() => setSize(0)}>
                                <Image objectFit="contain" src="/img/size.png" width="30px" height="30px" />
                                <span>Small</span>
                            </div>
                            <div className={style.item} onClick={() => setSize(1)}>
                                <Image objectFit="contain" src="/img/size.png" width="40px" height="40px" />
                                <span>Medium</span>
                            </div>
                            <div className={style.item} onClick={() => setSize(2)}>
                                <Image objectFit="contain" src="/img/size.png" width="50px" height="50px" />
                                <span>Large</span>
                            </div>
                        </div>
                        <div className={style.ingredients}>
                            <h3>Choose aditional ingredients</h3>
                            <div className={style.options}>
                                <input type="checkbox" id="double" name="double" className={style.checkBox} />
                                <label htmlFor="double" className={style.label}>Double Ingredient</label>
                            </div>
                            <div className={style.options}>
                                <input type="checkbox" id="cheese" name="cheese" className={style.checkBox} />
                                <label htmlFor="cheese" className={style.label}>Extra cheese</label>
                            </div>
                            <div className={style.options}>
                                <input type="checkbox" id="spicy" name="spicy" className={style.checkBox} />
                                <label htmlFor="spicy" className={style.label}>Spicy Sauce</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details