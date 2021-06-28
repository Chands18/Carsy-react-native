import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Register} from '../../../provider';
import {useNavigation} from '@react-navigation/native';
import Moment from 'moment';

const RegisterContent = () => {
  const [firstname, set_firstname] = useState('');
  const [lastname, set_lastname] = useState('');
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [phone, set_phone] = useState('');
  const [username, set_username] = useState('');
  var date = new Date();
  const formattedDate = Moment(date).format('yyyy-MM-DD');
  const [birthdate, set_birthdate] = useState(formattedDate);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  async function doSignUp() {
    console.log(phone, password, email);
    var body = {
      custName: firstname + ' ' + lastname,
      phoneNumber: phone,
      username: username,
      emailAddress: email,
      birthDate: birthdate,
      password: password,
    };
    console.log('sebelum fetch');
    var responseData = await Register({body: body});
    if (responseData == true) {
      navigation.navigate('login');
    } else {
      console.log('gagal');
    }
    console.log('setelah fetch');
  }

  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{marginTop: 30}}>
        <Text style={{fontStyle: 'italic', fontWeight: 'bold', fontSize: 18}}>
          Sign Up
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          Create Your Account
        </Text>
        <Text>Please sign up to continue</Text>
      </View>
      <View style={{marginTop: 40}}>
        <Text>First Name</Text>
        <TextInput
          onChangeText={val => set_firstname(val)}
          placeholder={'Full Name'}
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
          <Text>Last Name</Text>
        <TextInput
          onChangeText={val => set_lastname(val)}
          placeholder={'Full Name'}
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
        <Text>username</Text>
        <TextInput
          onChangeText={val => set_username(val)}
          placeholder={'Username'}
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
        <Text>E-Mail</Text>
        <TextInput
          onChangeText={val => set_email(val)}
          placeholder={'E-mail'}
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
        <Text>Password</Text>
        <TextInput
          onChangeText={val => set_password(val)}
          placeholder={'Password'}
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
        <Text>Phone Number</Text>
        <TextInput
          onChangeText={val => set_phone(val)}
          placeholder={'+62'}
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
        <Text>Date Birth</Text>
        <TouchableOpacity
          style={{width: '100%'}}
          onPress={() => {
            setDatePickerVisibility(true);
          }}>
          <Text style={styles.datetext}>
            {Moment(birthdate).format('yyyy-MM-DD')}
          </Text>
        </TouchableOpacity>
        {isDatePickerVisible && (
          <DateTimePicker
            value={new Date(birthdate)}
            mode="default"
            display="default"
            onChange={(val, newValue) => {
              var newDate = Moment(newValue).format('yyyy-MM-DD');
              set_birthdate(newDate);
              setDatePickerVisibility(false);
            }}
          />
        )}
      </View>
      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={() => doSignUp()}>
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
              fontSize: 18,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}}>
        <Text>Already have an account?</Text>
        <Text style={{color: 'lightseagreen'}}>Login</Text>
      </View>
    </View>
  );
};

export default RegisterContent;

const styles = StyleSheet.create({});
