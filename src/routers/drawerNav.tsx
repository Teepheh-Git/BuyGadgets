import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNav from "./bottomTabNav";
import {NavigationContainer} from "@react-navigation/native";
import NotFoundScreen from "../screens/notFoundScreen";
import {Dimensions, View} from "react-native";
import ProfileScreen from "../screens/profileScreen";
import {SimpleLineIcons, FontAwesome5, Ionicons, MaterialIcons} from "@expo/vector-icons";
import BasketScreen from "../screens/basketScreen";
import CheckoutScreen from "../screens/checkoutScreen";
import FavouriteScreen from "../screens/favouriteScreen";

const Drawer = createDrawerNavigator();

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const DrawerNav = () => {
    return (

        <View style={{
            // flex:1,
            width: w,
            height: h,
        }}>

            <NavigationContainer>

                <Drawer.Navigator drawerType={"slide"}
                                  backBehavior={"history"}
                                  initialRouteName={"My Orders"}
                                  drawerStyle={{backgroundColor: '#5956E9',}}
                                  drawerContentOptions={{
                                      activeTintColor: '#fff',
                                      inactiveTintColor: '#fff',
                                      activeBackgroundColor: '#ffffff00',
                                      itemStyle: {
                                          marginVertical: 16,
                                          borderBottomWidth: 0.2,
                                          borderBottomColor: '#fff',
                                      },
                                      labelStyle: {fontSize: 16,}
                                  }}


                >


                    <Drawer.Screen name="Profile" component={ProfileScreen}
                                   options={{
                                       // drawerLabel:({color})=> ,
                                       drawerIcon: ({color}) =>
                                           <FontAwesome5 name="user" size={25} color="#fff"/>
                                   }}/>
                    <Drawer.Screen name="My Orders" component={BottomTabNav}
                                   options={{
                                       drawerIcon: ({color}) =>
                                           <Ionicons name="cart-outline" size={25} color="#fff"/>
                                   }}/>
                    <Drawer.Screen name="Favourites" component={FavouriteScreen}
                                   options={{
                                       drawerIcon: ({color}) =>
                                           <MaterialIcons name="favorite-border" size={25} color="#fff"/>
                                   }}/>
                    <Drawer.Screen name="Delivery" component={BasketScreen}
                                   options={{
                                       drawerIcon: ({color}) =>
                                           <SimpleLineIcons name="handbag" size={25} color="#fff"/>
                                   }}/>
                    <Drawer.Screen name="Settings" component={NotFoundScreen}
                                   options={{
                                       drawerIcon: ({color}) =>
                                           <SimpleLineIcons name="settings" size={25} color="#fff"/>
                                   }}/>
                </Drawer.Navigator>
            </NavigationContainer>

        </View>
    );
};

export default DrawerNav;
