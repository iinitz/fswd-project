import mongoose from 'mongoose'
import { composeWithMongoose, composeWithMongooseDiscriminators } from 'graphql-compose-mongoose'

const { Schema } = mongoose


const ProductInOrderSchema = new Schema({
  quantity: {type: Number, required: true},
  unitPrice: {type: Number, required: true},
})

const OrderSchema = new Schema({
  status: {type: String, required: true},
  createBy: {type: String, required: true},
  product: {type: ProductInOrderSchema, required: true}
})



export const OrderModel = mongoose.model('Order', OrderSchema)

export const OrderTC = composeWithMongoose(OrderModel)

export default OrderModel
