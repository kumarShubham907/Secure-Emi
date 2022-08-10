import express from 'express'
import { googleCloudApi, getUserList } from '../controller'
import AuthMiddleware from '../middleware/AuthMiddleware'

const route = express.Router()

route.post('/login', getUserList.login)
route.post('/addUser', getUserList.createUsersRole)
route.get('/getRegisteredDeviceList', googleCloudApi.getUserList)
route.get('/lockApp', googleCloudApi.lockDeviceApp)
route.get('/freezDevice', googleCloudApi.freezDevice)
route.get('/restart', googleCloudApi.userDeviceReboot)
route.get('/genrateQR', googleCloudApi.genrateUniqueQR)

export default route









