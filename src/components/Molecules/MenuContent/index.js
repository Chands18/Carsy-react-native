import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {images} from '../../../assets';
import {cars} from '../../../assets';
const width = Dimensions.get('screen').width / 1 - 30;

const MenuContent = () => {
  const navigation = useNavigation();
  const Card = ({cars}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Details', cars)}>
        <View style={styles.card}>
          <View style={{height: 130, alignItems: 'center'}}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={cars.Image}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 23,
              marginTop: 12,
              alignSelf: 'center',
            }}>
            {cars.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
                width: 25,
                height: 25,
                right: 20,
              }}
              source={images.img_duit}
            />
            <Text style={{fontSize: 18, right: 45}}>/Day Rp{cars.price}</Text>
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
                width: 25,
                height: 25,
                left: 22,
              }}
              source={images.img_person}
            />
            <Text style={{right: 10, fontSize: 18}}> Seat {cars.seat}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <View style={{marginTop: 30, marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'lightseagreen',
              marginBottom: 20,
            }}>
            Choose your car
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            position: 'relative',
          }}>
          <TextInput
            placeholder="Search on carsy..."
            style={{
              backgroundColor: 'lightseagreen',
              borderRadius: 15,
              marginBottom: 20,
              width: 350,
              height: 40,
              elevation: 10,
            }}></TextInput>
          <Image
            style={{width: 27, height: 27, top: 7, left: 7}}
            source={images.img_srch}
          />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        contentContainerStyle={{height: '230%'}}
        numColumns={1}
        data={cars}
        renderItem={({item}) => {
          return <Card cars={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default MenuContent;

const styles = StyleSheet.create({
  card: {
    height: 250,
    backgroundColor: 'aliceblue',
    width,
    marginHorizontal: 12,
    marginTop: 20,
    borderRadius: 12,
    elevation: 5,
  },
});
