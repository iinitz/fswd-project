import { CartTC } from '../../models'

export const cart = CartTC.getResolver('findMany')
export const cartById = CartTC.getResolver('findById')