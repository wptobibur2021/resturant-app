import React from 'react'
import style from '../../styles/Footer.module.css'
const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.footerItem}>
                <div className={style.item}>
                    <h2 className={style.footerTitle}>About Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime delectus, minus necessitatibus eligendi itaque ipsum non rerum aliquid. Praesentium vel natus voluptatibus magnam iste, totam eum voluptates illo maxime quisquam? </p>
                </div>
                <div className={style.item}>
                    <h2 className={style.footerTitle}>About Us</h2>
                    <ul className={style.footerMenu}>
                        <li className={style.footerMenuList}>Home</li>
                        <li className={style.footerMenuList}>Home</li>
                        <li className={style.footerMenuList}>Home</li>
                        <li className={style.footerMenuList}>Home</li>
                        <li className={style.footerMenuList}>Home</li>
                    </ul>
                </div>
                <div className={style.item}>
                    <h2 className={style.footerTitle}>About Us</h2>
                    <ul className={style.footerMenu}>
                        <li className={style.footerMenuList}>Home</li>
                        <li className={style.footerMenuList}>Home</li>
                        <li className={style.footerMenuList}>Home</li>
                        <li className={style.footerMenuList}>Home</li>
                        <li className={style.footerMenuList}>Home</li>
                    </ul>
                </div>
                <div className={style.item}>
                    <h2 className={style.footerTitle}>Found Us</h2>
                    <ul className={style.footerMenu}>
                        <li className={style.footerMenuList}>96 Haslemere Road ECCLES M30 7ST</li>
                        <li className={style.footerMenuList}>info@techbd71.com</li>
                        <li className={style.footerMenuList}>079 0319 4376</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer