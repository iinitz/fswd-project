import { CartTC, productInCartTC } from '../../models'

export const cart = CartTC.getResolver('findMany')
export const productInCart = productInCartTC.getResolver('findMany')