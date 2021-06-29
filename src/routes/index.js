import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { EditProfile, Home, Login, Menu, Profile, Register } from '../pages';
import { BookingDetail, DetailScreen, HistoryComponent, SplashScreen} from '../components'

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return(
    <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="History" component={HistoryComponent} /> 
      </Drawer.Navigator>
  );
};
const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="splashscreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="menu"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingDetail}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="GridView"
          component={GridView}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};