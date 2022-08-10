import { google } from 'googleapis'
import { Auth } from "../../utils/authKeyScopes";
import { policyJson } from '../../utils/policyJson';
import { QRCodeUrl } from './QRCodeLink';

const androidManagement = google.androidmanagement('v1');

const googleCloudApi = {

    async genrateUniqueQR(req, res, next) {
        const authClient = await Auth.getClient();
        google.options({ auth: authClient });
        const policyName = `enterprises/LC03o7l0pz/policies/policyId_${new Date().getTime().toString()}`

        //                  Create Policies                 //

        const createPolicies = await androidManagement.enterprises.policies.patch({
            name: `${policyName}`,
            updateMask: 'applications,playStoreMode',
            requestBody: policyJson
        })

        //                  Create Policies End                //

        const enrollmentToken = await androidManagement.enterprises.enrollmentTokens.create({
            parent: "enterprises/LC03o7l0pz",
            requestBody: {
                policyName: `${createPolicies.data.name}`
            }
        })
        const genratedList = await QRCodeUrl(enrollmentToken)

        res.json({ message: 'success', data: genratedList })
    },

    async getUserList(req, res, next) {
        const authClient = await Auth.getClient();
        google.options({ auth: authClient });
        const getDevices = await androidManagement.enterprises.devices.list({
            parent: "enterprises/LC03o7l0pz"  // Enterprise Name
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
        res.json({ message: 'Reboot successfull', data: reboot.data })
    },

    async lockDeviceApp(req, res, next) {
        const authClient = await Auth.getClient();
        google.options({ auth: authClient });

        const lockApp = await androidManagement.enterprises.policies.patch({
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
        res.json({ message: 'App Locked Successfull', data: lockApp })
    },

    async freezDevice(req, res, next) {
        const authClient = await Auth.getClient();
        google.options({ auth: authClient });

        const freezApp = await androidManagement.enterprises.policies.patch({
            name: "enterprises/LC03o7l0pz/policies/daishygoyal", // current working on => enterprises/LC03o7l0pz/policies/policyId_1660050004649
            updateMask: "applications,playStoreMode",
            requestBody: {
                "applications": [
                    {
                        "packageName": "com.whatsapp",
                        "installType": "FORCE_INSTALLED", // FORCE_INSTALLED || KIOSK || BLOCKED
                        "defaultPermissionPolicy": "GRANT"
                      }
                ],
                "playStoreMode": "BLACKLIST"
            }
        })
        res.json({ message: 'Device Locked Successfull', data: freezApp })
    }
}
export default googleCloudApi






