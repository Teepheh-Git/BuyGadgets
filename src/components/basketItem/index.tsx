import React, {useState} from 'react';
import {Image, StyleSheet, Pressable, Text, View, Dimensions} from "react-native";
import QuantitySelector from "../QuantitySelector";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

interface basketItemProps {
    basketItem: {
        id: string;
        quantity: number;
        item: {
            image: string;
            title: string;
            price: string;
        };
    };
}

const BasketItem = ({basketItem}: basketItemProps) => {
    const {quantity: quantityProp, item} = basketItem
    const [quantity, setQuantity] = useState(quantityProp);


    return (
        <Pressable style={styles.root}>

            {/*image*/}
            <Image style={styles.image} source={{uri: item.image}}/>

            {/*container holding price title and quantity selector*/}
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>$ {item.price}</Text>

                {/*quantity selector section imported*/}
                <View style={styles.quantitySelector}>
                    <Text style={styles.quantity}>Quantity: </Text>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                </View>
            </View>
        </Pressable>
    );
};

export default BasketItem;

const styles = StyleSheet.create({
    root: {
        width: w * 0.8,
        // height: h,
        flexDirection: 'row',
        marginVertical: 10,
        color: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',

    },
    image: {
        flex: 2,
        width: w * 0.07,
        height: h * 0.17,
        resizeMode: 'contain'
    },
    quantity: {
        fontSize: 15,
    },
    quantitySelector: {
        flexDirection: "row",
        alignItems: 'center'
    },

    rightContainer: {
        flex: 3,
        padding: 10,
        justifyContent: "center"

    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',

    },

    price: {
        fontSize: 17,
        fontWeight: "700",
        color: '#5956E9',
        marginVertical: 15

    },


});

