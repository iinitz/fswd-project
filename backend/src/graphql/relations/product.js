import moment from 'moment'
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
BaseProductTC.addFields({
    timestamp:{
        type: "String",
        resolve: (source) => moment(source.timestamp).fromNow(),
        projection: {timestamp:1},
    },
})