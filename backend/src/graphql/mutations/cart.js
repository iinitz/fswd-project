import { CartTC } from '../../models'

export const updatePrice = CartTC.getResolver('updateById')
export const addProduct = CartTC.getResolver('createOne')
export const removeProductById = CartTC.getResolver('removeById')