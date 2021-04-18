import { CartTC, productInCartTC } from '../../models'

export const updatePrice = CartTC.getResolver('updateById')
export const addToCart = CartTC.getResolver('createOne')
export const delProduct = CartTC.getResolver('removeOne')
export const updateCart = CartTC.getResolver('updateOne')
// export const updateInCartProduct = CartTC.getFieldTC('product').hasResolver()

// export const createProductInCart = productInCartTC.getResolver('createOne')