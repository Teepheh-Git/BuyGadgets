import React from 'react';
import {View, Text, TextInput,} from "react-native";
import TextButton from "../../components/textButton";
import Button from "../../components/button";
import styles from "./styles";
import {Ionicons, EvilIcons, FontAwesome} from '@expo/vector-icons';
import {
    useFonts,
    Raleway_100Thin,
    Raleway_100Thin_Italic,
    Raleway_200ExtraLight,
    Raleway_200ExtraLight_Italic,
    Raleway_300Light,
    Raleway_300Light_Italic,
    Raleway_400Regular,
    Raleway_400Regular_Italic,
    Raleway_500Medium,
    Raleway_500Medium_Italic,
    Raleway_600SemiBold,
    Raleway_600SemiBold_Italic,
    Raleway_700Bold,
    Raleway_700Bold_Italic,
    Raleway_800ExtraBold,
    Raleway_800ExtraBold_Italic,
    Raleway_900Black,
    Raleway_900Black_Italic,
} from "@expo-google-fonts/raleway";

const LoginScreen = () => {
    let [fontsLoaded] = useFonts({
        Raleway_100Thin,
        Raleway_200ExtraLight,
        Raleway_300Light,
        Raleway_400Regular,
        Raleway_500Medium,
        Raleway_600SemiBold,
        Raleway_700Bold,
        Raleway_800ExtraBold,
        Raleway_900Black,
        Raleway_100Thin_Italic,
        Raleway_200ExtraLight_Italic,
        Raleway_300Light_Italic,
        Raleway_400Regular_Italic,
        Raleway_500Medium_Italic,
        Raleway_600SemiBold_Italic,
        Raleway_700Bold_Italic,
        Raleway_800ExtraBold_Italic,
        Raleway_900Black_Italic,
    });

    return (
        // the whole container
        <View style={styles.root}>
            {/*the elipse designs*/}
            <View style={styles.elipse0}>
                <FontAwesome name="circle" size={125} color="#FAB8C3"/>
            </View>
            <View style={styles.elipse1}>
                <FontAwesome name="circle-o" size={27} color="#706EFD"/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Welcome back </Text>
            </View>
            <View style={styles.elipse2}>
                <FontAwesome name="circle-o" size={35} color="#706EFD"/>
            </View>

            {/*the whole login container*/}
            <View style={styles.loginContainer}>
                <Text style={styles.login}>Login</Text>

                {/*email container with icon*/}
                <View style={styles.emailContainer}>
                    <Ionicons name="mail-outline" size={15} color="#868686"/>
                    <Text style={styles.email}>Email</Text>
                </View>

                {/*email placeholder*/}
                <TextInput placeholder={"E-mail"}
                           style={styles.textInput1}
                           maxLength={50}
                           numberOfLines={1}
                           autoFocus={true}>
                </TextInput>

                {/*password container with icon*/}
                <View style={styles.passwordContainer}>
                    <EvilIcons name="lock" size={23} color="#868686"/>
                    <Text style={styles.password}>Password</Text>
                </View>

                {/*password placeholder*/}
                <View style={styles.showPassContainer}>
                    <TextInput placeholder={"Password"}
                               style={styles.textInput2}
                               maxLength={20}
                               numberOfLines={1}
                               secureTextEntry={true}>
                    </TextInput>
                    {/*show password*/}
                    <TextButton text={"Show"} onPress={() => console.warn("Show was pressed")}/>
                </View>

                {/*forgot password container*/}
                <View style={styles.textButton}>
                    <TextButton text={"Forgot passcode?"}
                                onPress={() => console.warn("Forgot passcode? was pressed")}/>
                </View>


                {/*button container*/}
                <View style={styles.buttonContainer}>
                    <Button type={"primary"} text={"Login"} onPress={() => console.warn("Login was pressed")}/>
                </View>

                {/*create acct container*/}
                <View style={styles.createAccContainer}>
                    <TextButton text={"Create account"}
                                onPress={() => console.warn("Create account was pressed")}/>
                </View>
            </View>
        </View>

    );
};

export default LoginScreen;

