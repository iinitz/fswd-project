import { React, useEffect, useState, useCallback, Fragment } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_CART } from '../../graphql/CartQuery'
import { UPDATE_CART, CLEAR_CART } from '../../graphql/CartMutation'

const GetCart = () => {
    const {error, loading, data} = useQuery( QUERY_CART, {variables: {userId: "6077f2c070ffdf2acc072bc9"}} )
    const [updateCart] = useMutation(UPDATE_CART)
    const [clearCart] = useMutation(CLEAR_CART)

    function UpdateQuantity(){
        return updateCart({variables: {userId: "6077f2c070ffdf2acc072bc9"}})
    }

    function clear_Cart(){
        return clearCart({variables: {userId: "6077f2c070ffdf2acc072bc9"}})
    }

    function addProduct(){
        var a = data.cart[0].product
        console.log(a)
        a = [...a, {"eiei" : 555}]
        console.log(a)
    }

    return(
        <div>
        {
            data && data.cart.map((item) => {
                return <div>{
                    item.product.map((product) => {
                    return (
                        <div><span>{product.quantity}</span> </div>
                        )
                    })
                }
                </div>
            })
        }
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addProduct} > AddNew </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clear_Cart} > DELETE </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={UpdateQuantity} > RESET </button>
        </div>
    )

}

export default GetCart