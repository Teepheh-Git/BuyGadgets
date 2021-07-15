import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";


// For multiple Buttons...

// @ts-ignore
const TabButton = (currentTab, setCurrentTab, title, image) => {
    return (

        <TouchableOpacity onPress={() => {
            if (title == "LogOut") {
                // Do your Stuff...
            } else {
                setCurrentTab(title)
            }
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: 'center',
                paddingVertical: 15,
                backgroundColor: currentTab == title ? '#FFFFFF80' : 'transparent',
                paddingLeft: 15,
                paddingRight: 35,
                width: '50%',
                borderBottomColor: 'white',
                borderBottomWidth: 0.5,
                borderRadius: 8,
                marginTop: 20
            }}>

                <Image source={image} style={{
                    position: 'absolute',
                    width: 30, height: 30,
                    tintColor: currentTab == title ? "#5359D1" : "white"
                }}>
                </Image>

                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingLeft: 25,
                    color: currentTab == title ? "#5359D1" : "white"
                }}>{title}</Text>

            </View>
        </TouchableOpacity>
    );
}

export default TabButton;
