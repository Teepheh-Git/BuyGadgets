import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Wearable from "../screens/topTabScreens/wearable";
import Laptops from "../screens/topTabScreens/laptops";
import Phones from "../screens/topTabScreens/phones";
import Drones from "../screens/topTabScreens/drones";
import {Dimensions, StyleSheet, View} from "react-native";

const Tab = createMaterialTopTabNavigator()
const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const TopBarNav = () => {

    return (
        <View style={{
            width: w * 0.9,
            height: h * 0.48,
        }}>
            {/*<NavigationContainer>*/}
                <Tab.Navigator
                    backBehavior={"history"}
                    swipeEnabled={false}
                    initialRouteName="Wearable"
                    tabBarOptions={{
                        activeTintColor: '#5956E9',
                        inactiveTintColor:'#9A9A9D',
                        labelStyle: {fontSize: 12, textTransform:'capitalize', fontWeight:'700'},
                        style: {backgroundColor: '#e5e5e5'},

                    }}>
                    <Tab.Screen
                        name={'Wearable'}
                        component={Wearable}
                        options={{tabBarLabel: 'Wearable'}}
                    />
                    <Tab.Screen
                        name={"Laptops"}
                        component={Laptops}
                        options={{tabBarLabel: 'Laptops'}}
                    />
                    <Tab.Screen
                        name={"Phones"}
                        component={Phones}
                        options={{tabBarLabel: 'Phones'}}
                    />
                    <Tab.Screen
                        name={"Drones"}
                        component={Drones}
                        options={{tabBarLabel: 'Drones'}}
                    />
                </Tab.Navigator>
            {/*</NavigationContainer>*/}
        </View>
    );
};

export default TopBarNav;

