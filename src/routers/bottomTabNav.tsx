import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FavouriteScreen from "../screens/favouriteScreen";
import ProfileScreen from "../screens/profileScreen";
import CheckoutScreen from "../screens/checkoutScreen";
import {Feather, MaterialIcons, FontAwesome5, Ionicons} from '@expo/vector-icons';
import HomeScreen from "../screens/homescreen";
import {Dimensions, View} from "react-native";

const Tab = createBottomTabNavigator()
const w = Dimensions.get("window").width
const h = Dimensions.get("window").height


const BottomTabNav = () => {
    return (

        <View style={{
            // flex:1,
            width: w,
            height: h*0.88,
        }}>

            <NavigationContainer>

                <Tab.Navigator backBehavior={"history"}
                               tabBarOptions={{
                                   showLabel: false,
                                   activeBackgroundColor:'#e5e5e5',
                                   inactiveBackgroundColor:'#e5e5e5',
                                   inactiveTintColor: '#9A9A9D',
                                   activeTintColor: '#5956E9',

                               }}>
                    <Tab.Screen name={'HomeScreen'} component={HomeScreen}
                                options={{
                                    tabBarIcon: ({color}) =>
                                        <Feather name="home" size={22} color="#5956E9"/>
                                }}
                    />
                    <Tab.Screen name={'FavouriteScreen'} component={FavouriteScreen}
                                options={{
                                    tabBarIcon: ({color}) =>
                                        <MaterialIcons name="favorite-border" size={22} color="#5956E9"/>
                                }}/>
                    <Tab.Screen name={'ProfileScreen'} component={ProfileScreen}
                                options={{
                                    tabBarIcon: ({color}) =>
                                        <FontAwesome5 name="user" size={22} color="#5956E9"/>
                                }}/>
                    <Tab.Screen name={'CheckoutScreen'} component={CheckoutScreen} options={{
                        tabBarIcon: ({color}) =>
                            <Ionicons name="cart-outline" size={22} color="#5956E9"/>
                    }}/>
                </Tab.Navigator>
            </NavigationContainer>

        </View>


    );
};

export default BottomTabNav;
