import { react, useState } from 'react'
import { useQuery } from '@apollo/client'
import { CART_QUERY } from '../../graphql/testCartQuery'



const Checkout = () => {

    const {error, loading, data} = useQuery(CART_QUERY)
    const {cartData, setCartData} = useState([])


    function pressFunc(){
        console.log("activate click")
    }

    if(data){
        console.log(data)
    }

    return(
        <>
        
        {
            data && data.cart.map((cart)=>{

                // cart.product.map((product) => {
                //     return <h1>{product.quantity}</h1>
                // })

                return(
                    <div className="flex">
                        <div className="m-3 p-2 bg-red-200">
                            {cart?.createdByUser?.firstName}{" "}{cart?.createdByUser?.lastName}
                            <ul>
                                <li key="productID">
                                    productId<br />{cart?.product[0]?.productId}
                                </li>
                                <li>
                                    name<br />{cart?.product[0]?.productInfo?.name}
                                </li>
                                <li>
                                    price<br />{cart?.product[0]?.productInfo?.price}
                                </li>
                                <li>
                                    stock<br />{cart?.product[0]?.productInfo?.count}
                                </li>
                                <li>
                                    quantity<br />{cart?.product[0]?.quantity}
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }
        <button onClick={pressFunc} className="m-2 p-1 bg-gray-200 shadow-md hover:shadow-xl">Create Order</button>
        </>
    )
}

export default Checkout