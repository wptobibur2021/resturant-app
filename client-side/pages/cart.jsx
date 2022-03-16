import React, { useState } from 'react'
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
const Cart = () => {
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.cart)
  const [open, setOpen] = useState(false)
  const amount = "2";
  const currency = "USD";
  const style = {
    "layout": "vertical",
    "color": "silver"
  };
  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);


    return (<>
      {(showSpinner && isPending) && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {carts.carts?.map((cart) => (
            <tr className={styles.tr} key={cart._id}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src={cart.images}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>{cart.name}</span>
              </td>
              <td>
                <span className={styles.extras}>
                  {cart.extras?.map((extra) => (
                    <span>{extra.text}<br></br></span>
                  ))}
                </span>
              </td>
              <td>
                <span className={styles.price}>${cart.price}</span>
              </td>
              <td>
                <span className={styles.quantity}>{cart.qty}</span>
              </td>
              <td>
                <span className={styles.total}>${cart.qty * cart.price}</span>
              </td>
            </tr>
          ))}


        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${carts.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${carts.total}
          </div>
          {open ? (
            <div className={styles.paymentBtn}>
              <button className={styles.cashOnDelevary}>CASH ON DELEVERY</button>
              <PayPalScriptProvider
                options={{
                  "client-id": "test",
                  components: "buttons",
                  currency: "USD, CAD, EUR",
                  "enable-funding": "paypal",
                  //"disable-funding": "credit, card, p24"
                }}
              >
                <ButtonWrapper
                  currency={currency}
                  showSpinner={false}
                />
              </PayPalScriptProvider>
            </div>
          ) : (<button onClick={() => setOpen(true)} className={styles.button}>CHECKOUT NOW!</button>)}
        </div>
      </div>
    </div >
  );
};

export default Cart;
