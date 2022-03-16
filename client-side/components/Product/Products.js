import React from 'react'
import Single from './Single'
import style from '../../styles/Products.module.css'

const Products = ({ products }) => {
    return (
        <div className={style.container}>
            <div className={style.sectionHeader}>
                <h2 className={style.sectionTitle}>This is product list</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className={style.wrapper}>
                <div className={style.productItem}>
                    {
                        products?.map((product) => <Single key={product.id} product={product}></Single>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Products


