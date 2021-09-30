import express, { Router } from 'express'
import foo from 'services/sample'

const routes = express.Router()
routes.use('/bar', foo)

export default routes