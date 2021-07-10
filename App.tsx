import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from "./src/screens/splashScreen";
import ProfileScreen from "./src/screens/profileScreen";
import LoginScreen from "./src/screens/loginScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <LoginScreen />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdcdc',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
