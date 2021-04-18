import {BaseProductTC, PromotionProductTC} from '../../models'

export const Products = BaseProductTC.getResolver('findMany')
export const ProductId = BaseProductTC.getResolver('findById')

export const PromotionProductId = PromotionProductTC.getResolver('findById')