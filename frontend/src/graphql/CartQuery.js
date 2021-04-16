import { gql, useQuery } from '@apollo/client'

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
