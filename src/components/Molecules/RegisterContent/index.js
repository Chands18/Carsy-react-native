import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const RegisterContent = () => {
    // const navigation = useNavigation();
    return (
        <View style={{marginHorizontal:20}}>
            <View style={{marginTop:30}}>
            <Text style={{fontStyle:'italic', fontWeight:'bold', fontSize:18}}>Sign Up</Text>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{color:'black', fontSize:30, fontWeight:'bold'}}>Create Your Account</Text>
                <Text>Please sign up to continue</Text>
            </View>
            <View style={{marginTop:40}}>
                <Text>Full Name</Text>
                <TextInput style={{borderRadius:10, backgroundColor:'lightgrey'}}></TextInput>
                <Text>E-Mail</Text>
                <TextInput style={{borderRadius:10, backgroundColor:'lightgrey'}}></TextInput>
                <Text>Password</Text>
                <TextInput style={{borderRadius:10, backgroundColor:'lightgrey'}}></TextInput>
                <Text>Confirm Password</Text>
                <TextInput style={{borderRadius:10, backgroundColor:'lightgrey'}}></TextInput>
            </View>
            <View style={{marginTop:30}}>
                <TouchableOpacity>
                    <Text style={{backgroundColor:'lightseagreen',alignSelf:'flex-end', borderRadius:10,elevation:10, height:35, textAlign:'center', width:100, fontWeight:'bold', fontSize:18}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:25}}>
                <Text>
                    Already have an account?
                </Text>
                <Text style={{color:'lightseagreen'}}>Login</Text>
            </View>
        </View>
    )
}

export default RegisterContent

const styles = StyleSheet.create({})
