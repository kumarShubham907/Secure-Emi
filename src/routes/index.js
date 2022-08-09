import express from 'express'

import { googleCloudApi, getUserList } from '../controller'
import AuthMiddleware from '../middleware/AuthMiddleware'
const route = express.Router()
route.get('/', googleCloudApi.getUserList)
route.post('/addUser',AuthMiddleware, getUserList.createUsersRole)
route.post('/login', getUserList.login)
route.get('/lockApp', googleCloudApi.lockDeviceApp)
route.get('/lockDevice', googleCloudApi.lockDevice)
route.get('/restart', googleCloudApi.userDeviceReboot)
route.get('/genrateQR', googleCloudApi.genrateUniqueQR)

export default route









