import express from 'express'
import { googleCloudApi } from '../controller'
const router = express.Router()

router.get('/', googleCloudApi.getUserList)
router.get('/lock', googleCloudApi.lockDeviceApp)
router.get('/restart', googleCloudApi.userDeviceReboot)

export default router









