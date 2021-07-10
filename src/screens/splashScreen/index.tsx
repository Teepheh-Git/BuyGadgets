import React from 'react';
import {Image, Text, View} from "react-native";
import Button from "../../components/button";
import styles from "./styles";

const SplashScreen = () => {
    return (

        //the whole container
        <View style={styles.root}>

            {/*the text container*/}
            <View style={styles.textContainer}>
                <Text style={styles.text}>Find your Gadget</Text>
            </View>

            {/*the image container*/}
            <View>
                <Image style={styles.image} source={require("../../../assets/images/one.png")}/>
            </View>

            {/*the button container, the button is being imported from the button component*/}
            <View style={styles.buttonContainer}>
                <Button onPress={() => console.warn("pressed")} text={"Get Started"} type={"secondary"}/>
            </View>
        </View>

    );
};

export default SplashScreen;

