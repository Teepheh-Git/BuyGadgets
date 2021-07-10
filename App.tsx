import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from "./src/screens/splashScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <SplashScreen />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
