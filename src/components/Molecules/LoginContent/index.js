import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

const LoginContent = () => {
    const navigation = useNavigation();
    return (
        <View style={{marginHorizontal:20}}>
            <View style={{marginTop:30}}>
            <Text style={{fontStyle:'italic', fontWeight:'bold', fontSize:18}}>Log In</Text>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{color:'black', fontSize:30, fontWeight:'bold'}}>Hi, Welcome Back!</Text>
                <Text>Please sign in to continue</Text>
            </View>
            <View style={{marginTop:40}}>
                <Text>E-Mail</Text>
                <TextInput style={{borderRadius:10, backgroundColor:'lightgrey'}}></TextInput>
                <Text>Password</Text>
                <TextInput style={{borderRadius:10, backgroundColor:'lightgrey'}}></TextInput>
                <Text>Confirm Password</Text>
                <TextInput style={{borderRadius:10, backgroundColor:'lightgrey'}}></TextInput>
            </View>
            <View style={{marginTop:30}}>
                <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                    <Text style={{backgroundColor:'lightseagreen',alignSelf:'flex-end', borderRadius:10,elevation:10, height:35, textAlign:'center', width:100, fontWeight:'bold', fontSize:20}}>login</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:25}}>
                <Text>
                    Don't have an account?
                </Text>
                <Text style={{color:'lightseagreen'}}>Sign Up</Text>
            </View>
        </View>
    )
}

export default LoginContent

const styles = StyleSheet.create({})
