import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

interface clickable {
    text: string;
    onPress: () => void;
}

const TextButton = ({text, onPress}: clickable) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default TextButton;
const styles = StyleSheet.create({
    text: {
        color: "#5956E9",
        fontWeight: 'bold'

    }
})
