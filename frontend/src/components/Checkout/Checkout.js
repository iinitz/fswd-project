import { react, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { CREATE_ORDER } from '../../graphql/createOrder'
import { QUERY_CART } from '../../graphql/CartQuery'
import { useHistory } from "react-router-dom";



const Checkout = () => {

    const {error, loading, data} = useQuery( QUERY_CART, {variables: {userId: "6077f2c070ffdf2acc072bc9"}} )
    const [createOrder] = useMutation(CREATE_ORDER)
    let history = useHistory();

    function createOrderBtn(){

        data && data.cart.map((cart)=>{
            
            return createOrder({variables: {
                userId: "6077f2c070ffdf2acc072bc9",
                statusOrder: "waiting",
                payment: "unspecify",
                productId: cart?.product[0]?.productId,
                quantity: cart?.product[0]?.quantity,
            }})
        })

        console.log("create order success")
        history.push('/payment')
    }

    return(
        <>
        {
            data && data.cart.map((cart)=>{

                return(
                    <div className="flex">
                        <div className="m-3 p-2 bg-red-200">
                            {cart?.createdByUser?.firstName}{" "}{cart?.createdByUser?.lastName}
                            <ul>
                                <li key="productID">
                                    <b>Productid</b><br />{cart?.product[0]?.productId}
                                </li>
                                <li>
                                    <b>name</b><br />{cart?.product[0]?.productInfo?.name}
                                </li>
                                <li>
                                    <b>Price</b><br />{cart?.product[0]?.productInfo?.price}
                                </li>
                                <li>
                                    <b>Stock</b><br />{cart?.product[0]?.productInfo?.count}
                                </li>
                                <li>
                                    <b>Quantity</b><br />{cart?.product[0]?.quantity}
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }

        <button onClick={createOrderBtn} className="m-2 p-1 bg-gray-200 shadow-md hover:shadow-xl">Go to Payment</button>

        </>
    )
}

export default Checkout