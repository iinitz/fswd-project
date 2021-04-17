import { OrderTC, productInOrderTC } from '../../models'

export const order = OrderTC.getResolver('findMany')
export const findOrderbyId = OrderTC.getResolver('findById')
export const findOneOrder = OrderTC.getResolver('findOne')
export const productInOrder = productInOrderTC.getResolver('findMany')