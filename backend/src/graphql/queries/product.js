import {BaseProductTC} from '../../models'

export const Products = BaseProductTC.getResolver('findMany')
export const ProductId = BaseProductTC.getResolver('findById')