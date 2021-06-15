import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { images } from '../../../assets'
import { useNavigation } from '@react-navigation/native';

const ProfileContent = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{flexDirection:'row', marginTop:75,alignSelf:'center'}}>
                <Image source={images.img_prfl} style={{width:70, height:70}} />
                <View style={{justifyContent:'space-evenly', left:20}}>
                <Text>John Doe</Text>
                <Text>JohnDoe@gmail.com</Text>
                <Text>+62123445678912</Text>
                </View>
            </View>
            <View style={{marginHorizontal:20, marginTop:50}}>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}} onPress={() => navigation.replace('Edit')}>
                <Image source={images.img_usr} style={{width:30, height:30}} />
                <Text>Edit Profile</Text>
                <Image source={images.img_arrw} style={{width:22, height:22}} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:20, marginTop:15}}>
                <Image source={images.img_lng} style={{width:30, height:30}} />
                <Text>Language</Text>
                <Image source={images.img_arrw} style={{width:22, height:22}} />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:20, marginTop:15}}>
                <Image source={images.img_notes} style={{width:30, height:30}} />
                <Text>Terms and Condition</Text>
                <Image source={images.img_arrw} style={{width:22, height:22}} />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:20, marginTop:15}}>
                <Image source={images.img_notes} style={{width:30, height:30}} />
                <Text>Privacy Policy</Text>
                <Image source={images.img_arrw} style={{width:22, height:22}} />
            </View>
            <View style={{marginTop:130, alignSelf:'center'}}>
                <Text>Version 1.0</Text>
            </View>
            <View style={{marginTop:30}}>
                <TouchableOpacity style={{height:55}} onPress={() => navigation.replace('Home')}>
                    <Text style={{backgroundColor:'lightseagreen',alignSelf:'center', borderRadius:10,elevation:8, height:40, textAlign:'center', width:260, fontWeight:'bold', fontSize:20}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileContent

const styles = StyleSheet.create({})
