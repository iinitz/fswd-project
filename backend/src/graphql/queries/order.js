import { OrderTC } from '../../models'

export const order = OrderTC.getResolver('findMany')
export const findOrderbyId = OrderTC.getResolver('findById')
export const findOneOrder = OrderTC.getResolver('findOne')