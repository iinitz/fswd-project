import OrderTC from '../../models'

export const Order = OrderTC.getResolver('findMany')
export const FindOrderbyId = OrderTC.getResolver('findById')
export const FindOneOrder = OrderTC.getResolver('findOne')