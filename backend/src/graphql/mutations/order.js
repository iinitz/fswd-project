import OrderTC from '../../models'

export const createAdmin = OrderTC.getResolver('createOne')
export const updateCustomerById = OrderTC.getResolver('updateById')
export const removeUserById = OrderTC.getResolver('removeById')
