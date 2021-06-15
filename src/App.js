import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './routes';

export default function App() {
    return (
        // <ScrollView style={{width:'100%', height:'100%'}}>
        //     <View style={styles.container}>
        //         <Home/>
        //     </View>
        // </ScrollView>
        <SafeAreaProvider>
          <Routes/>
        </SafeAreaProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dimgrey',
        justifyContent:'flex-start',
        alignItems:'center'
    }
})