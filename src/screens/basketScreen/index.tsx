import React from 'react';
import {Dimensions, FlatList, SafeAreaView, ScrollView, Text, View} from "react-native";
import products from "../../data/cart";
import BasketItem from "../../components/basketItem";
import {Feather} from '@expo/vector-icons';
import Button from "../../components/button";
import styles from "./style";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const BasketScreen = () => {

    // function to sum the total price of all goods in the basket
    const totalPrice = products.reduce(
        (summedPrice, product) =>
            summedPrice + product.item.price * product.quantity, 0
    )

    return (
        <SafeAreaView style={styles.root}>

            {/*simple blue notification above*/}
            <View style={styles.notification}>
                <Feather name="bell" size={22} color="black"/>
                <Text style={styles.delivery}> Delivery for FREE until the end of the month </Text>
            </View>

            {/*scrollView showing all the items in the basket*/}
            <ScrollView showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        contentContainerStyle={styles.contentContainer}>

                {/*flatList rendering the whole item in the basket*/}
                <FlatList
                    data={products}
                    showsVerticalScrollIndicator={false}
                    // @ts-ignore

                    renderItem={({item}) => <BasketItem basketItem={item}/>}
                />
            </ScrollView>

            {/*container holding the total and price*/}
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.price}>$ {totalPrice.toFixed(2)}</Text>
            </View>

            {/*button section*/}
            <View style={styles.buttonContainer}>
                <Button text={"Checkout"} onPress={() => console.warn("Proceed to confirm")}
                        type={"primary"}
                    // @ts-ignore
                        containerStyles={{
                            backgroundColor: "#5956E9", marginVertical: 10,
                            height: h * 0.08,
                            width: w * 0.8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}/>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;


