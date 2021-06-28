import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Login} from '../../../provider';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import { LoadingIndicator } from '../../Atoms/LoadingIndicator';

const LoginContent = () => {
  const [phone, set_phone] = useState('');
  const [password, set_password] = useState('');
  const navigation = useNavigation();
  const [isloading, set_loading] = useState(false);

  async function doLogin() {
    set_loading(true);
    console.log(phone, password);
    var body = {
      phoneNumber: phone,
      password: password,
    };
    console.log('sebelum fetch');
    var responseData = await Login({body: body});
    if (responseData == true) {
      navigation.navigate('menu');
    } else {
      console.log('gagal');
    }
    console.log('setelah fetch');
    set_loading(false);
  }
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{marginTop: 30}}>
        <Text style={{fontStyle: 'italic', fontWeight: 'bold', fontSize: 18}}>
          Log In
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          Hi, Welcome Back!
        </Text>
        <Text>Please sign in to continue</Text>
      </View>
      <View style={{marginTop: 40}}>
        <Text>Phone Number</Text>
        <TextInput
          placeholder={'+62'}
          onChangeText={val => set_phone(val)}
          style={styles.input}></TextInput>
        <Text>Password</Text>
        <TextInput
          placeholder={'password'}
          onChangeText={val => set_password(val)}
          style={styles.input}></TextInput>
      </View>
      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={() => doLogin()}>
          <Text
            style={{
              backgroundColor: 'lightseagreen',
              alignSelf: 'flex-end',
              borderRadius: 10,
              elevation: 10,
              height: 35,
              textAlign: 'center',
              width: 100,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('register')}>
        <Text style={{color: 'lightseagreen'}}>Sign Up</Text>
        {/* {
        isloading?<LoadingIndicator/>:null
      } */}
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginContent;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
});
