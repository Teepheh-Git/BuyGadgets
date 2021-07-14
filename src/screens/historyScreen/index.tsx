import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from "react-native";
import Button from "../../components/button";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const HistoryScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={require("../../../assets/images/Saly-11.png")} style={styles.image}/>
            <Text style={styles.text}>No history yet</Text>
            <Text style={styles.description}>Hit the blue button down below to create an order</Text>
            <Button text={"Start ordering"} onPress={() => console.warn("order")} type={"primary"}
                // @ts-ignore
                    containerStyles={{
                        backgroundColor: "#58C0EA", marginVertical: 10,
                        height: h * 0.08,
                        width: w * 0.8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}/>
        </View>
    );
};

export default HistoryScreen;

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
        aspectRatio: 1.5,
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

