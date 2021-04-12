import { BaseProductTC, UserTC } from '../../models'
// import mongoose from 'mongoose'
BaseProductTC.addRelation(
    'createBy',{
        resolver: () => UserTC.getResolver('findById'),
        prepareArgs: {
            _id: (source) => source.createdByUser,
        },
        projection: { createdById: 1},
    }
)