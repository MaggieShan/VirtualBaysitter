import React from 'react';
import { Button, StyleSheet, Text,  } from 'react-native';
import base64 from 'react-native-base64';

// Updated to fillers for privacy 
const ACC_SID = '**'
const AUTH_TOKEN = '**'
const FROM_NUM = '+##'
const TO_NUM = '+##'

export function sendSMS() {
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
}
 
