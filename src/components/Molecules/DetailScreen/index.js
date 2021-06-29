import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {icons, images} from '../../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';

const DetailScreen = ({navigation, route}) => {
  var date = new Date();
  const formattedDate = Moment(date).format('yyyy-MM-DD');
  const [birthdate, set_birthdate] = useState(formattedDate);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Enable, setEnable] = useState('with driver');

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
  const cars = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'ghostwhite'}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{width: 28, height: 28}} source={images.img_back} />
        </TouchableOpacity>
      </View>
      <View style={styles.imagecontainer}>
        <Image source={{uri: cars.Image}} style={{height:300, width:300, flex:1}} resizeMode="contain" />
      </View>
      <View style={styles.detailscontainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 29, fontWeight: 'bold'}}>{cars.name}</Text>
          <View style={styles.priceTag}>
            <Text style={{marginLeft: 6, fontWeight: 'bold'}}>
              Rp {cars.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>About</Text>
          <Text style={{fontSize: 15, lineHeight: 22, marginTop: 10}}>
            {cars.about}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25,
            }}>
            <View style={styles.borderBtn}>
              <Image
                style={{resizeMode: 'contain', flex: 1}}
                source={images.img_gear}
              />
              <Text style={styles.borderBtnText}>Automatic</Text>
            </View>
            <View style={styles.borderBtn}>
              <Image
                style={{resizeMode: 'contain', flex: 1}}
                source={images.img_gas}
              />
              <Text style={styles.borderBtnText}>{cars.fuel}</Text>
            </View>
            <View style={styles.borderBtn}>
              <RNPickerSelect
                onValueChange={value => console.log(value)}
                items={[
                  {label: 'With Driver', value: 'With Driver'},
                  {label: 'Without Driver', value: 'Without Driver'},
                ]}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtn}>
                <Image
                  style={{resizeMode: 'contain', flex: 1}}
                  source={images.img_calendar}
                />
                <TouchableOpacity
                  style={{width: '100%'}}
                  onPress={() => {
                    setDatePickerVisibility(true);
                  }}>
                  <Text style={styles.datetext}>
                    {Moment(date).format('yyyy-MM-DD')}
                  </Text>
                </TouchableOpacity>
                {isDatePickerVisible && (
                  <DateTimePicker
                    value={new Date(date)}
                    mode="date"
                    display="default"
                    onChange={(val, newValue) => {
                      var newDate = Moment(newValue).format('yyyy-MM-DD');
                      set_birthdate(newDate);
                      setDatePickerVisibility(false);
                    }}
                  />
                )}
              </View>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Booking')}>
              <View style={styles.buyBtn}>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Book Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  imagecontainer: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  detailscontainer: {
    flex: 0.65,
    backgroundColor: 'ghostwhite',
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
    marginHorizontal: 7,
  },
  priceTag: {
    backgroundColor: 'lightseagreen',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  borderBtn: {
    backgroundColor: 'lightseagreen',
    elevation: 10,
    borderWidth: 0.4,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 60,
  },
  borderBtnText: {fontSize: 15},
  buyBtn: {
    width: 200,
    height: 50,
    backgroundColor: 'lightseagreen',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  datetext: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 100,
    backgroundColor: 'transparent',
    borderRadius: 8,
    height: 20,
  },
});
