import { react, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { CREATE_ORDER } from '../../graphql/createOrder'
import { QUERY_CART, QUERY_CART_ORDER } from '../../graphql/CartQuery'
import { useHistory } from "react-router-dom";



const Checkout = () => {

    const {error, loading, data} = useQuery( QUERY_CART, {variables: {userId: "6077f2c070ffdf2acc072bc9"}})
    const {data: dataOrder} = useQuery(QUERY_CART_ORDER, {variables: {userId: "6077f2c070ffdf2acc072bc9"}})
    const [createOrder] = useMutation(CREATE_ORDER)
    let history = useHistory();

    function createOrderBtn(){

        let eiei = JSON.stringify(dataOrder)
        let newone = JSON.parse(eiei)

        let a = [...newone.cart[0].product]
        a.map((obj) => delete obj.__typename)

        console.log("create order success")
        history.push('/payment')

        return createOrder({variables: {
            userId: "6077f2c070ffdf2acc072bc9",
            statusOrder: "waiting",
            payment: "unspecify",
            product: a
        }})

    }

    return(
        <>

        <div className="flex">
            <div className="m-3 p-2 bg-red-200 ">
                {data?.cart[0]?.createdByUser?.firstName}{" "}{data?.cart[0]?.createdByUser?.lastName}
                {data?.cart[0].product.map((product)=>{
                    return(
                        <div className="m-1 p-2 bg-green-200">
                            <ul>
                                <li key="productID">
                                    <b>Productid</b><br />{product?.productId}
                                </li>
                                <li>
                                    <b>name</b><br />{product?.productInfo?.name}
                                </li>
                                <li>
                                    <b>Price</b><br />{product?.productInfo?.price}
                                </li>
                                <li>
                                    <b>Stock</b><br />{product?.productInfo?.count}
                                </li>
                                <li>
                                    <b>Quantity</b><br />{product?.quantity}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
        

        <button onClick={createOrderBtn} className="m-2 p-1 bg-gray-200 shadow-md hover:shadow-xl">Go to Payment</button>

        </>
    )
}

export default Checkout