import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Dimensions} from "react-native";

interface ButtonProps {
    text: string;
    onPress: () => void;
    type: string;

}


const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const Button = ({text, onPress, type}: ButtonProps) => {

    const backGroundColor = type === 'primary' ? '#5956E9' : '#ffffff';
    const textColor = type === 'primary' ? '#FFFFFF' : '#5956E9';
    return (
        <TouchableOpacity activeOpacity={0.85} onPress={onPress}
                          style={[styles.root, {backgroundColor: backGroundColor}]}>
            <Text style={[styles.text, {color: textColor}]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({

    root: {
        marginVertical: 10,
        height: h * 0.08,
        width: w * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#5956E9'


    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'

    }

})

