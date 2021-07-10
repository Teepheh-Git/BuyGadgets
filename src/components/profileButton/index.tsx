import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from '@expo/vector-icons';

interface props {
    text: string;
    onPress: () => void;
}

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const ProfileButton = ({text, onPress}: props) => {
    return (
        // the touchable component container
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.root}>

            {/*the container encapsulating the icon and the text*/}
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <AntDesign name="right" size={35} color="black"/>

            </View>

        </TouchableOpacity>
    );
};

export default ProfileButton;


// the styling
const styles = StyleSheet.create({
    root: {
        marginVertical: h * 0.015,
        borderRadius: 20,
        width: w * 0.9,
        height: h * 0.07,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff'
    },
    container: {
        borderRadius: 20,
        width: w * 0.8,
        height: h * 0.08,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold'
    }
});
