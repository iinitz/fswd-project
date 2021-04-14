import { CartTC, productInCartTC } from '../../models'

export const cart = CartTC.getResolver('findMany')
// export const productInCartById = productInCartTC.getResolver('findById')
