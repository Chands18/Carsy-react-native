import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import {FlatList} from 'react-native-gesture-handler';
const width = Dimensions.get('screen').width / 1 - 10;


const HistoryComponent = () => {
    return (
        <View style={{backgroundColor:'ghostwhite', height:'100%'}}>
            <View style={{alignItems:'center',marginTop:30}}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>History</Text>
            </View>
            <View style={{backgroundColor:'aliceblue',elevation:5,borderRadius:10,borderColor:'limegreen',borderWidth:1 ,height:150,width, marginHorizontal:5,marginTop:50}}>
                <View style={{marginLeft:20}}>
                <Text style={{fontWeight:'bold'}}>Trip Completed</Text>
                <Text>26 Mei 2021, 06.45</Text>
                </View>
                <View>
                    
                </View>
            </View>
            <FlatList />
        </View>
    )
}

export default HistoryComponent
