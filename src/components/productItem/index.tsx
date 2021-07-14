import React from 'react';
import {Image, Pressable, StyleSheet, Text, Dimensions} from "react-native";
import products from "../../data/products";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

interface ProductItemProps {
    item: {
        title: string;
        image: string;
        color: string;
        subtitle: string;
        price: number
    };
}

const ProductItem = ({item}: ProductItemProps) => {
    return (

        <>
            <Pressable style={styles.root}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle} . {item.color}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
            </Pressable>
        </>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: w * 0.5,
        height: h * 0.28,
        marginTop: 100,
        alignItems: 'center',
        // justifyContent:'center',
        margin: 15,
        backgroundColor: '#fff',
        borderRadius: 20,

    },
    image: {
        width: w * 0.35,
        height: w * 0.35,
        borderRadius: w * 5,
        marginTop: -w * 0.1,
        resizeMode:"cover",
        backgroundColor:'#868686'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#868686',
        marginTop: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#5956E9',
        marginTop: 20,
    }
})
