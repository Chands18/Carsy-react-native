import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../../../assets';

const BookingDetail = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'ghostwhite'}}>
      <View style={styles.backbtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{width: 28, height: 28}} source={images.img_back} />
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:20}}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 19, marginTop:20}}>
            Booking Details
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingDetail;

const styles = StyleSheet.create({
  backbtn: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
});
