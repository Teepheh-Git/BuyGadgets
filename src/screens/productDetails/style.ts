import {Dimensions, StyleSheet} from "react-native";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height


// styling for product details screen
const styles = StyleSheet.create({
    root: {
        height: h * 0.9,
        width: w,
    },
    images: {
        width: w,
        height: h * 0.35,
    },

    detailsCon: {
        backgroundColor: '#fff',
        height: h,
        width: w,
        marginTop: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        width: w * 0.8,
        marginHorizontal: 25,
        marginVertical: 20,
        letterSpacing: 0.5
    },
    color: {
        fontWeight: 'bold',
        fontSize: 18,
        width: w * 0.8,
        marginHorizontal: 25,
        letterSpacing: 0.5
    },

    colorSelector: {
        // alignItems:'center',
        // flexDirection:'row',
        // width: w*0.85,
        height: h * 0.09,
        margin: 5

    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        width: w * 0.8,
        marginVertical: 10,
        marginHorizontal: 25,
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 17,
        width: w * 0.75,
        marginHorizontal: 25,
        letterSpacing: 0.5,
        opacity: 0.5
    },
    fullDescription: {
        flexDirection: 'row',
        marginVertical: 10,
        width: w * 0.35,
        marginHorizontal: 25,
        alignItems: 'center'

    },
    totalContainer: {
        width: w * 0.85,
        marginHorizontal: 25,
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    total: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#5956E9'
    },
    buttonContainer: {
        width: w * 0.9,
        alignItems: 'center',
        marginHorizontal: 25,
        height: h * 0.1,


    }


});

export default styles;
