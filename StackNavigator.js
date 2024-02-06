import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PlansScreen from "./screens/PlansScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header"
import HeaderTabs from "./components/HeaderTabs"
import Hero from "./components/Hero"
import Settings from './screens/Settings'
import SettingsScreen from './screens/SettingsScreen'
import EditProfile from './screens/EditProfile'
import AddProfile from './screens/AddProfile'
import VideoPlayer from "./screens/VideoPlayer";
import {useFonts} from 'expo-font';
import SearchScreen from "./screens/SearchScreen"




const StackNavigator = () => {
  
  
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="PlansScreen" component={PlansScreen} /> 
      <Stack.Screen name="PaymentScreen" component={PaymentScreen}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Header" component={Header}/>
      <Stack.Screen name="HeaderTabs" component={HeaderTabs}/>
      <Stack.Screen name="Hero" component={Hero}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
      <Stack.Screen name="AddProfile" component={AddProfile}/>
      <Stack.Screen name="VideoPlayer" component={VideoPlayer}/>
      <Stack.Screen name="SearchScreen" component={SearchScreen}/>







    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});



