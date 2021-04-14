import { CartTC, UserTC, productInCartTC, ProductTC, BaseProductTC } from '../../models'

CartTC.addRelation(
    'createdByUser',{
        resolver: () => UserTC.getResolver('findById'),
        prepareArgs: {
            _id: (source) => source.createdById,
        },
        projection: {createdById: true},
    }
)
