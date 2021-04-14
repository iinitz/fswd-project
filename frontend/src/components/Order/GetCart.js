import { React, useEffect, useState, useCallback, Fragment } from 'react'
import { useQuery } from '@apollo/client'
import { CART_QUERY } from '../../graphql/testCartQuery'

const GetCart = () => {
    const {error, loading, data} = useQuery(CART_QUERY)
    const { cart, setCart } = useState([])

    if(data){
        console.log(data)
    }
    return(
        <Fragment>
            {
                data && data.cart.map((cart)=>{
                    // console.log(cart)
                    return cart.product.map((product) => {
                        // console.log(product)
                        return <h1>{product.quantity}</h1>
                    })
                })
            }
        </Fragment>
    )
}

export default GetCart