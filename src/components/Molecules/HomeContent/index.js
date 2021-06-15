import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { images } from '../../../assets'


const HomeContent = () => {
    const navigation = useNavigation();
    return (
        <View style={{marginHorizontal:65, marginTop:50}}>
            <View>
                <Text style={{alignSelf:'center', top:70, fontSize:30}}>Welcome to Carsy!</Text>
                <Text style={{alignSelf:'center', top:75}}>Rent cars easily anytime</Text>
                <Image style={{alignSelf:'center', top:95}} source={images.img_logo}/>
            </View>
            <View>
                <View style={{backgroundColor:'lightseagreen', borderRadius:10, elevation:5, height:25, top:130}}>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={{textAlign:'center',color:'black'}}>Login</Text>
                </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white', borderRadius:10, elevation:5, height:25, top:140}}>
                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text style={{color:'black', textAlign:'center'}}>Register</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{alignSelf:'center', top:160}}>or continue with</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:180}}>
                <Image style={{right:20, width:30, height:30}} source={images.img_fb}/>
                <Image style={{width:30, height:30}} source={images.img_google}/>
                <Image style={{left:25, width:30, height:30}} source={images.img_msg}/>
            </View>
        </View>
    )
}

export default HomeContent

const styles = StyleSheet.create({})
