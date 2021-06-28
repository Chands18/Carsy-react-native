import AsyncStorage from '@react-native-community/async-storage';

const baseUrl = 'http://192.168.0.143/haritsa_rest_api/index.php/v2/';
export const get = async ({auth = false, endpoint = ''}) => {
  const token = await AsyncStorage.getItem('access_token');

  return await fetch(baseUrl + endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
  });
};
export const post = async ({auth = false, endpoint = '', body = {}}) => {
  const token = await AsyncStorage.getItem('access_token');
  return await fetch(baseUrl + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
    body: JSON.stringify(body),
  });
};
export const del = async ({auth = false, endpoint = ''}) => {
  const token = await AsyncStorage.getItem('access_token');

  return await fetch(baseUrl + endpoint, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
  });
};
export const put = async ({auth = false, endpoint = '', body = {}}) => {
  const token = await AsyncStorage.getItem('access_token');

  return await fetch(baseUrl + endpoint, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
    body: JSON.stringify(body),
  });
};
