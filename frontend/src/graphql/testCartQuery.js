import { gql } from '@apollo/client'

    export const CART_QUERY = gql`
    query{
        cartById(_id:"60759689d3edb62678576709"){
        product{
            quantity
            _id
            unitPrice
        }
        }
    }
`
