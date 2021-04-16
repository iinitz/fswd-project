import { gql } from '@apollo/client'

export const ORDER_QUERY = gql`
    query{
        cart(filter:{createdById:$userid}){
        createdById
        product{
            productInfo{
            name
            }
            quantity
        }
        paymentdetail
        }
    }
`
