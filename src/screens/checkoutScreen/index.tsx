import React from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import TextButton from "../../components/textButton";
import {Feather, FontAwesome5} from '@expo/vector-icons';
// @ts-ignore
import RadioButtonRN from 'radio-buttons-react-native';
import Button from "../../components/button";
import styles from "./styles";
import {props} from "../profileScreen";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const cards = [
    {
        label:
            <View style={{
                marginVertical: 5,
                width: w * 0.7,
                height: h * 0.05,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Image source={require("../../../assets/images/visa.png")}/>
                <Text style={{fontSize: 18, fontWeight: 'bold', letterSpacing: 2}}> **** **** **** 8754</Text>
            </View>,
        accessibilityLabel: 'visa'

    },
    {
        label:
            <View style={{
                marginVertical: 5,
                width: w * 0.7,
                height: h * 0.05,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Image source={require("../../../assets/images/master.png")}/>
                <Text style={{fontSize: 18, fontWeight: 'bold', letterSpacing: 2}}> **** **** **** 0855</Text>
            </View>,
        accessibilityLabel: 'MasterCard'
    },
    {
        label:
            <View style={{
                marginVertical: 5,
                width: w * 0.7,
                height: h * 0.05,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Image source={require("../../../assets/images/bank.png")}/>
                <Text style={{fontSize: 18, fontWeight: 'bold', letterSpacing: 2}}> **** **** **** 2368</Text>
            </View>,
        accessibilityLabel: 'Bank'
    }
];

const CheckoutScreen = () => {
    return (
        <View style={styles.root}>
            {/*shipping information */}
            <View style={styles.ShippingInfoCon}>
                <Text style={styles.ShippingInfo}>Shipping information</Text>
                <TextButton text={"change"} onPress={() => console.warn("change")}/>
            </View>


            {/*container holding the users data*/}
            <View style={styles.dataContainer}>
                <View style={styles.nameContainer}>
                    <FontAwesome5 name="user" size={24} color="black"/>
                    <Text style={styles.name}> {props.name}</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Feather name="map-pin" size={24} color="black"/>
                    <Text style={styles.address}> {props.address}</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Feather name="phone" size={24} color="black"/>
                    <Text style={styles.phone}> {props.phone}</Text>
                </View>

            </View>

            {/*payment method*/}
            <View style={styles.payMethodCon}>
                <Text style={styles.payMethod}>Payment Method</Text>
            </View>

            {/*container holding the cards*/}
            <View style={styles.cardsContainer}>
                <RadioButtonRN data={cards}
                               circleSize={12}
                               selectedBtn={() => console.warn("card selected")}
                               box={false}
                               style={{height: h * 0.25, justifyContent: 'center',}}/>
            </View>

            {/*container holding the total and price*/}
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.price}>$ 1099.89</Text>
            </View>

            {/*button section*/}
            <View style={styles.buttonContainer}>
                <Button text={"Confirm and pay"} onPress={() => console.warn("Proceed to confirm")}
                        type={"primary"}
                    // @ts-ignore
                        containerStyles={{
                            backgroundColor: "#5956E9", marginVertical: 10,
                            height: h * 0.08,
                            width: w * 0.85,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}/>
            </View>
        </View>
    );
};

export default CheckoutScreen;


