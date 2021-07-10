import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from "react-native";
import Button from "../../components/button";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const NotFoundScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={require("../../../assets/images/Saly-17.png")} style={styles.image}/>
            <Text style={styles.text}>Item not found</Text>
            <Text style={styles.description}>Try a more generic search term or try looking for alternative
                products.</Text>

        </View>
    );
};

export default NotFoundScreen;

const styles = StyleSheet.create({

    root: {
        flex: 1,
        width: w,
        height: h,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5'
    },
    image: {
        width: w * 0.8,
        height: h * 0.4,
        aspectRatio: 1.2,
        resizeMode: 'contain',
        marginVertical: 10

    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 5
    },
    description: {
        color: '#000000',
        width: w * 0.7,
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        marginVertical: 10
    }
});

