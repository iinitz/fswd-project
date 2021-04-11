import { ProductTC } from '../../models'

export const product = ProductTC.getResolver('findMany')
export const productOne = ProductTC.getResolver('findOne')