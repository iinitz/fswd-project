import mongoose, { SchemaTypeOptions } from 'mongoose'
import { composeWithMongoose, composeWithMongooseDiscriminators } from 'graphql-compose-mongoose'
const { Schema } = mongoose

const discriminatorKey = 'type'
const enumProductType = {
    PRODUCT: 'Product',
    PROMOPRODUCT: 'PromotionProduct'
}

const BaseProductSchema = new Schema({

    type:{
        type: String,
        require: true,
        enum: Object.keys(enumProductType),
        index: true,
    },
    name:{ type: String, required: true, index: true},
    description:{ type: String, required: false},
    image:{ type: [ String ] , required: true},
    price:{ type: mongoose.Decimal128, required: true},
    count:{ type: Number, required: true},
    category:{ type: [ String ]},
    createdByUser:{
        type: String,
        required: true,
        ref: 'User'
    },
    timestamp:{type: Date, default: Date.now}
})

const PromotionProductSchema = new Schema({
    discount: {type: mongoose.Decimal128, require: true},
    limit:{type: Number, required: true}
})

const discriminatorOptions = { 
    inputType: {
        removeFields:['timestamp'],
    }
}

BaseProductSchema.set('discriminatorKey', discriminatorKey)

export const BaseProductModel = mongoose.model('Products', BaseProductSchema)
export const PromotionProductModel = BaseProductModel.discriminator(enumProductType.PROMOPRODUCT, PromotionProductSchema)
export const ProductModel = BaseProductModel.discriminator(enumProductType.PRODUCT, BaseProductSchema)

export const BaseProductTC = composeWithMongooseDiscriminators(BaseProductModel)
export const ProductTC = BaseProductTC.discriminator(ProductModel, {name:enumProductType.PRODUCT, ...discriminatorOptions})
export const PromotionProductTC = BaseProductTC.discriminator(PromotionProductModel, {name:enumProductType.PROMOPRODUCT, ...discriminatorOptions})

export default BaseProductModel