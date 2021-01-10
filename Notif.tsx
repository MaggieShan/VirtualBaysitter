import React from 'react';
import { Button, StyleSheet, Text,  } from 'react-native';
import base64 from 'react-native-base64';

const ACC_SID = 'ACa364c29e2ec20da27f62c3f2a19a42fe'
const AUTH_TOKEN = '8fdcde1845bfb89b4b03e4f2b96c642c'
const FROM_NUM = '+13362213940'
const TO_NUM = '+12892337522'

var form = new FormData();
let headers = new Headers();

form.append('Body', 'Hi, this is your virtual babysitter, looks like Jacki is on the loose!');
form.append('From', FROM_NUM);
form.append('To', TO_NUM);

headers.set('Authorization', 'Basic ' + base64.encode(ACC_SID + ":" + AUTH_TOKEN));
fetch(`https://api.twilio.com/2010-04-01/Accounts/${ACC_SID}/Messages.json`, {
  method: 'POST',
  headers: headers,
  body: form,
}).then(response => {
  console.log(JSON.stringify(response))
}).catch(error => {
  console.error(error);
})

const Notif = () => {
  return (
    <Text>NO COME BACK!</Text>
  )
}
export default Notif; 