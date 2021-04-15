import moment from 'moment'
import { OrderTC, UserTC } from '../../models'

OrderTC.addRelation(
    'createdByUser',{
        resolver: () => UserTC.getResolver('findById'),
        prepareArgs: {
            _id: (source) => source.createdById,
        },
        projection: {createdById: true},
    }
)

OrderTC.addFields({
    timestamp:{
        type: "String",
        resolve: (source) => moment(source.timestamp).fromNow(),
        projection: {timestamp: true},
    },
})