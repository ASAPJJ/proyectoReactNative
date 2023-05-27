import React from "react";
import Constants from 'expo-constants';
import { Text, View } from "react-native-web";
import Api from "./Api.jsx";

const Main = () =>{
    return (
    <View style={{marginTop: Constants.statusBarHeight, }}>

        <Api/>

    </View>
    )
}
export default Main;