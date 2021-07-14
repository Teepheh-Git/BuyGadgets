import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import TopBarNav from "./topBarNav";


const Root = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown: true}}>
                <Root.Screen name={'TopBarNav'} component={TopBarNav}/>
            </Root.Navigator>

        </NavigationContainer>


    );
};

export default Router;
