import React, {useState, useCallback} from 'react'
import {FlatList, StyleSheet, Image, View, useWindowDimensions, Dimensions} from 'react-native';

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const ImageCarousel = ({images}: { images: string[] }) => {

    // this state is for the active dots
    const [activeIndex, setActiveIndex] = useState(0);

    // this is to fit the image to the width of all screens
    const windowWidth = useWindowDimensions().width


    // function for the dot indicator to change on every image change
    const onFlatListUpdate = useCallback(({viewableItems}) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
        // console.log(viewableItems);
    }, []);

    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <Image
                        style={[styles.image, {width: windowWidth - 20}]}
                        source={{uri: item}}/>

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
                onViewableItemsChanged={onFlatListUpdate}
            />

            <View style={styles.dots}>

                {images.map((images, index) => (
                    <View style={[styles.dot, {backgroundColor: index === activeIndex ? '#5956E9' : '#ededed'}]}
                    />
                ))}

            </View>

        </View>
    );
};

export default ImageCarousel;

const styles = StyleSheet.create({
        root: {
            height: h * 0.35,
            alignItems: "center"
        },

        image: {
            height: h * 0.3,
            alignItems: "center",
            width: w * 0.8,
            resizeMode: 'contain',
            aspectRatio: 1.5
        },
        dots: {
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 10,
        },


        dot: {
            width: 10,
            height: 10,
            borderRadius: 25,
            borderWidth: 1,
            backgroundColor: '#ededed',
            borderColor: '#c9c9c9',
            margin: 5
        }


    }
);
