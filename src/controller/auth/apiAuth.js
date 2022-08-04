import { google } from 'googleapis'
import { Auth } from "../../utils/authKeyScopes";

const androidManagement = google.androidmanagement('v1');

const googleCloudApi = {
    async getUserList(req, res, next) {
        const authClient = await Auth.getClient();
        google.options({ auth: authClient });
        const getDevices = await androidManagement.enterprises.devices.list({
            parent: "enterprises/LC03o7l0pz"
        })
        res.json({ message: 'success', data: getDevices.data })
    },

    async userDeviceReboot(req, res, next) {
        const authClient = await Auth.getClient();
        google.options({ auth: authClient });

        const reboot = await androidManagement.enterprises.devices.issueCommand({
            name: "enterprises/LC03o7l0pz/devices/31dc21440073fbc1",
            requestBody: {
                type: "REBOOT"
            }
        })
        res.json({ message: 'reboot successfull', data: reboot.data })
    }
}
export default googleCloudApi

