import { google } from 'googleapis'
import { Auth } from "../../utils/authKeyScopes";
import { QRCodeUrl } from './QRCodeLink';

const androidManagement = google.androidmanagement('v1');

const googleCloudApi = {

    async genrateUniqueQR(req, res, next) {
        const authClient = await Auth.getClient();
        google.options({ auth: authClient });
        const enrollmentToken = await androidManagement.enterprises.enrollmentTokens.create({
            parent: "enterprises/LC03o7l0pz",
            requestBody: {
                policyName: "enterprises/LC03o7l0pz/policies/daishygoyal"
            }
        })
        const genratedList = await QRCodeUrl(enrollmentToken)
       
        res.json({ message: 'success', data: genratedList })
    },

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
    },

    async lockDeviceApp(req, res, next) {
        const authClient = await Auth.getClient();
        google.options({ auth: authClient });

        const lock = await androidManagement.enterprises.policies.patch({
            name: "enterprises/LC03o7l0pz/policies/daishygoyal",
            updateMask: "applications",
            requestBody: {
                "applications": [
                    {
                        "disabled": true,
                        "packageName": "com.facebook.lite"
                    }
                ]
            }
        })
        res.json({ message: 'App Locked Successfull', data: lock })
    }
}
export default googleCloudApi





