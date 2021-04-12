import mongoose, { SchemaTypeOptions } from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'
const { Schema } = mongoose

const ProductSchema = new Schema({

    name:{ type: String, required: true, index: true},
    description:{ type: String, required: false},
    image:{ type: [ String ] , required: true},
    price:{ type: mongoose.Decimal128, required: true},
    count:{ type: Number, required: true},
    category:{ type: [ String ]},
    // createdBy:{
    //     type: String,
    //     required: true,
    //     ref: 'User'
    // }
})

export const ProductModel = mongoose.model('Product', ProductSchema)
export const ProductTC = composeWithMongoose(ProductModel)
export default ProductModel