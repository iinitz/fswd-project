import { ProductTC, PromotionProductTC, BaseProductTC} from '../../models'

// export const products = ProductTC.getResolver('findMany')
// export const product = ProductTC.getResolver('findOne')
// export const productById = ProductTC.getResolver('findById')

// export const promotionProducts = PromotionProductTC.getResolver('findMany')
// export const promotionProduct = PromotionProductTC.getResolver('findOne')
// export const promotionProductById = PromotionProductTC.getResolver('findById')

export const Products = BaseProductTC.getResolver('findMany')
export const ProductId = BaseProductTC.getResolver('findById')