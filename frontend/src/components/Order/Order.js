import { React } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ORDER } from '../../graphql/queryOrder'
import { useSession } from '../../contexts/SessionContext'

const Order = () => {
    const { user } = useSession()
    const {error, loading, data} = useQuery( QUERY_ORDER, {variables: {userId: user?._id}} )

    if(user){
        return(
            <>
            {data && data.order.map((order)=>{
                return(
                    <div className="flex">
                        <div className="m-3 p-2 bg-yellow-200 ">
                            {order?.createdByUser?.firstName}{" "}{order?.createdByUser?.lastName}<br />
                            <b>{"Status of Order: "}</b>{order?.status}<br />
                            <b>{"Payment: "}</b>{order?.paymentDetail}<br />
    
                            {order?.product.map((product)=>{
                                return(
                                    <div className="m-1 p-2 bg-purple-200">
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
                )
            })}
            </>
        )
    }

    else{
        return(
            <>
            <div className="w-screen h-screen  text-2xl align-middle p-3">
                {"Invalid Session, Please Login First!"}
            </div>
            </>
        )
    }
    
}

export default Order