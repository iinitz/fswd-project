import { gql } from '@apollo/client'

    export const CART_QUERY = gql`
    query{
        cart(filter:{
          createdById: "6077f2c070ffdf2acc072bc9"
        }){
          product{
            productId
            productInfo{
              name
              count
              price
            }
            quantity
          }
        createdByUser{
          username
          firstName
          lastName
        }
        }
      }
`
