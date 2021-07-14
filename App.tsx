import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SplashScreen from "./src/screens/splashScreen";
import ProfileScreen from "./src/screens/profileScreen";
import LoginScreen from "./src/screens/loginScreen";
import FavouriteScreen from "./src/screens/favouriteScreen";
import HistoryScreen from "./src/screens/historyScreen";
import NotFoundScreen from "./src/screens/notFoundScreen";
import InternetScreen from "./src/screens/internetScreen";
import CheckoutScreen from "./src/screens/checkoutScreen";
import Wearable from "./src/screens/topTabScreens/wearable";
import TopBarNav from "./src/routers/topBarNav";
import Laptops from "./src/screens/topTabScreens/laptops";
import Phones from "./src/screens/topTabScreens/phones";
import Drones from "./src/screens/topTabScreens/drones";
import HomeScreen from "./src/screens/homescreen";
import Router from "./src/routers";
import BottomTabNav from "./src/routers/bottomTabNav";
import ProductDetails from "./src/screens/productDetails";
import BasketScreen from "./src/screens/basketScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <BasketScreen/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
