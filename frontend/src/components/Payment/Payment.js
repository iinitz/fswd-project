import { React, useState } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ORDER } from '../../graphql/queryOrder'
import { productDetail } from './productDetail'

const Payment = () => {
    const {error, loading, data} = useQuery( QUERY_ORDER, {variables: {userId: "6077f2c070ffdf2acc072bc9"}} )
    const {total, setTotal} = useState(0)

    function processPaymentBtn(){
        console.log("processPaymentBtn")
    }

    return(
        <>
        
        {
            data && data.order.map((order)=>{
                console.log(order)


            return(
                <>

                <div className="flex">
                        <div className="m-3 p-2 bg-green-200">
                            {"Order of "}{order?.createdByUser?.firstName}{" "}{order?.createdByUser?.lastName}<br />
                            {"Status: "}{order?.status}<br />
                            {"Date: "}{order?.timestamp}<br />

                        </div>
                </div>

                </>
                
            )
                


                // const handler = () => {
                //    return setTotal(total+(order?.product[0]?.productInfo?.price*order?.product[0]?.quantity))
                // }

                // return(
                    // <div className="flex">
                    //     <div className="m-3 p-2 bg-green-200">
                    //         {order?.createdByUser?.firstName}{" "}{order?.createdByUser?.lastName}
                    //         <ul>
                    //             <li key="productID">
                    //                 <b>Productid</b><br />{order?.product[0]?.productId}
                    //             </li>
                    //             <li>
                    //                 <b>name</b><br />{order?.product[0]?.productInfo?.name}
                    //             </li>
                    //             <li>
                    //                 <b>Price</b><br />{order?.product[0]?.productInfo?.price}
                    //             </li>
                    //             <li>
                    //                 <b>Stock</b><br />{order?.product[0]?.productInfo?.count}
                    //             </li>
                    //             <li>
                    //                 <b>Quantity</b><br />{order?.product[0]?.quantity}
                    //             </li>
                    //         </ul>
                    //     </div>
                    // </div>
                // )
            })
        }

        <div className="m-3 p-2 bg-blue-200 border-gray-400">
            {"Grand Total of This Order Will Be: "}{total}{" Baht."}
            
        </div>

        <button onClick={processPaymentBtn} className="m-2 p-1 bg-gray-200 shadow-md hover:shadow-xl">Process Payment</button>

        </>
    )
}

export default Payment