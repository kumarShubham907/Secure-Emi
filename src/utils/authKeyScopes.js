import { google } from 'googleapis'
export const Auth = new google.auth.GoogleAuth({
    keyFile: "./src/templates/controlldevice-9b085ecba203.json",
    scopes: ["https://www.googleapis.com/auth/androidmanagement"],
});