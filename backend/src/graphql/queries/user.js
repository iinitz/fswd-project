import { schemaComposer } from 'graphql-compose'

import {
  UserModel,
  UserTC,
  CustomerUserModel,
  CustomerUserTC,
  AdminUserModel,
  AdminUserTC,
} from '../../models'

export const me = schemaComposer.createResolver({
  name: 'me',
  type: UserTC.getType(),
  resolve: async ({ context }) => {
    if (!context.user) {
      return null
    }
    const { _id } = context.user
    const user = await UserModel.findById(_id)
    return user
  },
})

export const customerInfo = schemaComposer.createResolver({
  name: 'customerInfo',
  type: CustomerUserTC.getType(),
  resolve: async ({ context }) => {
    if (!context.user) {
      return null
    }
    const { _id } = context.user
    const user = await CustomerUserModel.findById(_id)
    return user
  },
})

export const adminInfo = schemaComposer.createResolver({
  name: 'adminInfo',
  type: AdminUserTC.getType(),
  resolve: async ({ context }) => {
    if (!context.user) {
      return null
    }
    const { _id } = context.user
    const user = await AdminUserModel.findById(_id)
    return user
  },
})
