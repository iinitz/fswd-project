import { AdminUserTC, CustomerUserTC, UserTC } from '../../models'

export const createAdmin = AdminUserTC.getResolver('createOne')
export const createCustomer = CustomerUserTC.getResolver('createOne')
export const updateAdminById = AdminUserTC.getResolver('updateById')
export const updateCustomerById = CustomerUserTC.getResolver('updateById')
export const removeUserById = UserTC.getResolver('removeById')