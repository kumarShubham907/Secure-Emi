import express from 'express'
import { google } from 'googleapis'
import { APP_PORT } from './src/config';

const androidManagement = google.androidmanagement('v1');

const app = express()

app.get('/', async (req, res) => {

    const Auth = new google.auth.GoogleAuth({
        keyFile: "./src/templates/controlldevice-9b085ecba203.json",
        scopes: ["https://www.googleapis.com/auth/androidmanagement"],
    });

    const authClient = await Auth.getClient();
 
    google.options({ auth: authClient });

    const getDevices = await androidManagement.enterprises.devices.list({
        parent: "enterprises/LC03o7l0pz"
    })
    console.log(getDevices.data);
    res.send('status code 400')
})

app.get('/restart', async (req, res) => {
 
    const Auth = new google.auth.GoogleAuth({
        keyFile: "./src/templates/controlldevice-9b085ecba203.json",
        scopes: ["https://www.googleapis.com/auth/androidmanagement"],
    });

    const authClient = await Auth.getClient();
    
    google.options({ auth: authClient });

    const reboot = await androidManagement.enterprises.devices.issueCommand({
        name: "enterprises/LC03o7l0pz/devices/31dc21440073fbc1",
        requestBody: {
            type: "REBOOT"
        }
    })
    console.log(reboot.data);
    res.send('status code 400')
    //enterprises/LC03o7l0pz/policies/daishygoyal
})

app.listen(APP_PORT, () => console.log("App running on PORT", APP_PORT));
