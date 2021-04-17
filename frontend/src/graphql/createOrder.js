import { gql } from '@apollo/client'

export const CREATE_ORDER = gql`
    mutation createOrder(
        $statusOrder: String!,
        $userId: String!,
        $payment: String!,
        $productId: String!,
        $quantity: Float!
    ){
        createOrder(record:{
        status: $statusOrder,
        createdById: $userId,
        paymentDetail: $payment,
        product:{
        productId: $productId,
        quantity: $quantity
        }
    }){
        record{
        timestamp
        product{
        productId
      }
        }
    }
}
`
