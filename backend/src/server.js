import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import jwt from 'express-jwt'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import './mongoose-connect'
import schema from './graphql'

const path = '/graphql'
const app = express()
const server = new ApolloServer({
  schema,
  playground: true,
  context: ({ req }) => ({ user: req.user }),
})
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
server.applyMiddleware({ app })

const port = process.env.PORT ?? 5001
app.listen({ port }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
})
