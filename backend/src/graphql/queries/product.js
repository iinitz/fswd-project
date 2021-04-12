import { ProductTC } from '../../models'

export const products = ProductTC.getResolver('findMany')
export const product = ProductTC.getResolver('findOne')
export const productById = ProductTC.getResolver('findById')