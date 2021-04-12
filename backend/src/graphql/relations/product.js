import { ProductTC } from '../../models'
import mongoose from 'mongoose'
ProductTC.addFields({
    promotion: {
        type: mongoose.Decimal128,
        required: true,
    }
})