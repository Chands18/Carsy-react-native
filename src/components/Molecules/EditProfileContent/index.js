import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../../assets';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const data = [
  {
    label: 'Male ', value : 1
   },
   {
    label: 'Female', value : 2
   }
  ];

export default function EditProfileContent() {
  const [gender, setGender] = useState(0);
  return (
    <View>
      <View style={{alignSelf: 'center', marginTop: 50}}>
        <Text style={{fontWeight: 'bold', fontSize: 23}}>Personal Data</Text>
        <Image
          source={images.img_prfl}
          style={{width: 80, height: 80, alignSelf: 'center', marginTop: 18}}
        />
      </View>
      <View style={{marginTop: 40, marginHorizontal: 20}}>
        <Text>Your Name</Text>
        <TextInput
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
        <Text>Email Address</Text>
        <TextInput
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
        <Text>Date of Birth</Text>
        <TextInput
          style={{borderRadius: 10, backgroundColor: 'lightgrey'}}></TextInput>
      </View>
      <View style={{alignSelf:'center',marginTop:30 }}>
        <RadioForm
          radio_props={data}
          labelColor={"green"}
          style={{paddingTop:10}}
          formHorizontal={true}
          labelHorizontal={true}
          selectedButtonColor={"red"}
          buttonColor={"green"}
          initial={0}
          onPress={(value) => {setGender({value})}}
        />
      </View>
      <View style={{marginTop: 35}}>
        <TouchableOpacity style={{height: 55}}>
          <Text
            style={{
              backgroundColor: 'lightseagreen',
              alignSelf: 'center',
              borderRadius: 10,
              elevation: 8,
              height: 40,
              textAlign: 'center',
              width: 260,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
