import { google } from 'googleapis'

export const Auth = new google.auth.GoogleAuth({
    keyFile: '../templates/controlldevice-9b085ecba203.json',
    scopes: ['https://www.googleapis.com/auth/androidmanagement'],
});    

const androidManagement = google.androidmanagement('v1');

const checkingRespose = async () => {
    const create = await androidManagement.signupUrls.create({
        callbackUrl: 'http://localhost:3000/',
        // The ID of the Google Cloud Platform project which will own the enterprise.
        projectId: 'secure-emi',
    })
    console.log("create",create)
}
checkingRespose();

