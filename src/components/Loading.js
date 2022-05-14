import React from "react";
import {ActivityIndicator, StyleSheet, useColorScheme, View} from
        "react-native";
import { Colors } from
        "react-native/Libraries/NewAppScreen";
const Loading = () => {
    const isDarkMode = useColorScheme() === "dark";
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker :
            Colors.lighter,
    };
    return (
        <View style={{backgroundColor:"darkviolet"}}>
            <ActivityIndicator />
        </View>
    );

};
export default Loading;
