import { ProductTC, PromotionProductTC } from '../../models'

export const createProduct = ProductTC.getResolver('createOne')
export const updateProductById = ProductTC.getResolver('updateById')
export const removeProductById = ProductTC.getResolver('removeById')

export const createPromotionProduct = PromotionProductTC.getResolver('createOne')
export const updatePromotionProductById = PromotionProductTC.getResolver('updateById')
export const removePromotionProductById = PromotionProductTC.getResolver('removeById')