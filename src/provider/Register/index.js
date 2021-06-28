import {ToastAndroid} from 'react-native';
import base64 from 'base-64';

export async function Register({body = {}}) {
  console.log(body);
  try {
    var auth = {
      username: 'mirror_mirror',
      password: 'M@5uk8o5.Kuy',
    };
    var formBody = [];
    for (var property in body) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    console.log(formBody);
    console.log('udah di function');
    var response = await fetch(
      'http://192.168.0.143/haritsa_rest_api/index.php/v2/Customer/signUp?API-KEY=fkc1896&id=1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization: `Basic ${base64.encode('mirror_mirror:M@5uk8o5.Kuy')}`,
        },
        body: formBody,
      },
    );
    console.log('udah di fetch');
    var status = response.status;
    console.log('ambil status');
    console.log(response);
    const data = await response.json();
    console.log('ambil data');
    console.log(data);
    if (data.status == false) {
      // handle klo gagal
      console.log('gagal');
      ToastAndroid.showWithGravityAndOffset(
        // Message di Toast
        'gagal',
        // Interval Toast Mengilang
        ToastAndroid.LONG,
        // Possisi Toast
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return false;
    } else {
      // return data
      // handle klo berhasil
      return true;
    }
  } catch (error) {
    console.log(error.message);
    if (error.message == "Unrecognized token '<'") {
      console.log('error');
    }
    return false;
  }
}
