import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from "./src/screens/splashScreen";
import ProfileScreen from "./src/screens/profileScreen";
import LoginScreen from "./src/screens/loginScreen";
import FavouriteScreen from "./src/screens/favouriteScreen";
import HistoryScreen from "./src/screens/historyScreen";
import NotFoundScreen from "./src/screens/notFoundScreen";
import InternetScreen from "./src/screens/internetScreen";
import CheckoutScreen from "./src/screens/checkoutScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <CheckoutScreen/>
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
