import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const CartSchema = new Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  prices: { type: Number, required: true },
  paymentdetail: {type: String},
})

export const CartModel = mongoose.model('Cart', CartSchema)

export const CartTC = composeWithMongoose(CartModel)

export default CartModel