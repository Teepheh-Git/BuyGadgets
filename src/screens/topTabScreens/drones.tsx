import React from 'react';
import products from "../../data/products";
import {Dimensions, FlatList, StyleSheet, View} from "react-native";
import ProductItem from "../../components/productItem";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const Drones = () => {
    return (
        <View style={styles.root}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={products}
                renderItem={({item}) => <ProductItem item={item}/>}/>
        </View>
    );
};

export default Drones;
const styles = StyleSheet.create({
    root: {
        width: w * 0.9,
        height: h * 0.45,
        backgroundColor: '#e5e5e5',

    }
})
