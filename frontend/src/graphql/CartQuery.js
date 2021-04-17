import { gql } from '@apollo/client'

export const QUERY_CART = gql`
query Cart($userId: String!){
    cart(filter:{
      createdById: $userId
    }){
      product{
        productId
        productInfo{
          name
          price
          timestamp
          count
        }
        quantity
      }
      createdByUser{
        firstName
        lastName
      }
    }
  }
`
