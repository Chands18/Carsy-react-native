import React, {useEffect} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { images } from '../../../assets';


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Home');
        },3000)
    }, [navigation]);

    return(
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor:'ghostwhite'}} >
            <Image source={images.img_splash}/>
        </View>
    )
}


export default SplashScreen

const styles = StyleSheet.create({})
