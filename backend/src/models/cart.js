import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const productInCartSchema = new Schema({
  quantity: {type: Number, required: true},
  unitPrice: {type: Number, required: true},
})

const CartSchema = new Schema({
  product: {type:[productInCartSchema], required: true},
  paymentdetail: {type: String, required: true},
  createdById : {type: String, required: true},
})

export const CartModel = mongoose.model('Cart', CartSchema)

export const CartTC = composeWithMongoose(CartModel)

export default CartModel