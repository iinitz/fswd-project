import { CartTC, UserTC, productInCartTC, ProductTC } from '../../models'

CartTC.addRelation(
    'createdByUser',{
        resolver: () => UserTC.getResolver('findById'),
        prepareArgs: {
            _id: (source) => source.createdById,
        },
        projection: {createdById: true},
    }
)

productInCartTC.addRelation(
    'ProductInfo',{
        resolver: () => ProductTC.getResolver('findById'),
        prepareArgs: {
            _id: (source) => source.productId,
        },
        projection: {productId: true},
    }
)