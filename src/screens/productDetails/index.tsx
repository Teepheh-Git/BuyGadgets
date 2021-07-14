import React from 'react';
import ImageCarousel from "../../components/imageCarousel";
import product from "../../data/product";
import {Dimensions, Text, View} from "react-native";
import TextButton from "../../components/textButton";
import {AntDesign} from "@expo/vector-icons";
import Button from "../../components/button";
// @ts-ignore
import RadioButtonRN from 'radio-buttons-react-native';
import styles from "./style";

const data = [
    {
        label: <Text style={{color: '#87CEEb'}}> Sky Blue</Text>,
        accessibilityLabel: 'Your label'
    },
    {
        label: <Text style={{color: '#b76e79'}}> Rose Gold</Text>,
        accessibilityLabel: 'Your label'
    },
    {
        label: <Text style={{color: 'green'}}> Green</Text>,
        accessibilityLabel: 'Your label'
    },
];
const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const ProductDetails = () => {
    return (
        <View style={styles.root}>

            {/*images imported from the image carousel component*/}
            <View style={styles.images}>
                <ImageCarousel images={product.images}/>
            </View>


            {/*container holding the product details*/}
            <View style={styles.detailsCon}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.color}>Colors</Text>

                {/*radio button for color selector*/}
                <View style={styles.colorSelector}>
                    <RadioButtonRN
                        data={data}
                        circleSize={10}
                        boxStyle={{borderRadius: 15, marginHorizontal: 5, borderColor: '#e5e5e5'}}
                        style={{margin: 2, width: w * 0.3, flexDirection: 'row', alignItems: 'center'}}
                        selectedBtn={() => console.warn("color")}
                    />
                </View>

                {/*product title */}
                <Text style={styles.subtitle}>{product.subtitle}</Text>
                <Text style={styles.description}>{product.description}</Text>

                {/*product description*/}
                <View style={styles.fullDescription}>
                    <TextButton text={'Full description'} onPress={() => console.warn('description')}/>
                    <AntDesign name="arrowright" size={20} color="#5956E9"/>
                </View>

                {/*container holding the total price*/}
                <View style={styles.totalContainer}>
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                </View>

                {/*the button container with its inline styling*/}
                <View style={styles.buttonContainer}>
                    <Button text={"Add to basket"} onPress={() => console.warn("add to basket")} type={"primary"}
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
        </View>
    );
};
export default ProductDetails;
