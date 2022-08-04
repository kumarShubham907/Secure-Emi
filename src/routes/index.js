import express from 'express'

import { googleCloudApi } from '../controller'
const route = express.Router()

route.get('/', googleCloudApi.getUserList)
route.get('/lock', googleCloudApi.lockDeviceApp)
route.get('/genrateQR', googleCloudApi.genrateUniqueQR)
route.get('/restart', googleCloudApi.userDeviceReboot)


export default route









